import { Country, PrismaClient } from '@prisma/client';
import defaultSiteConfig from '../data/defaultSiteConfig';
import { fetchCountryData } from '../src/lib/countryApi';
import { fetchCurrencyData } from '../src/lib/currencyApi';
const prisma = new PrismaClient()



async function createBaseSiteSetting(){
    try {
        const res = await prisma.siteConfig.upsert({
            where: { email: defaultSiteConfig.email },
            update:{},
            create: {...defaultSiteConfig}
        })
        console.log('createBaseSiteSetting :: seeding successfully')
    } catch (error) {
        console.error('createBaseSiteSetting :: ',error)
    }
}

async function createCountriesList(){
  try {
    const deleteAll = await prisma.country.deleteMany();
    const [countries, currencyData] = await Promise.all([fetchCountryData(), fetchCurrencyData({})]);
    
    const dataForFill = countries.map(country => {
      const {name, alpha2Code: alpha2, alpha3Code: alpha3, curCode, curSymbol } = country;
      const base = currencyData.base;
      const rate = Object.entries(currencyData.rates).find(([key, value]) => key === country.curCode)?.[1]||'1';

      return {name, alpha2, alpha3, curCode, curSymbol, rate, base}
    })
    const res = await prisma.country.createMany({
      data: dataForFill
    })
    console.log('createCountriesList :: seeding successfully')
} catch (error) {
    console.error('createCountriesList :: ',error)
}
}


async function main(){
  await createCountriesList();
  // await createBaseSiteSetting();
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })