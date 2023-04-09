import { PrismaClient } from '@prisma/client';
import defaultSiteConfig from '../data/defaultSiteConfig';
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


async function main(){
  await createBaseSiteSetting();
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