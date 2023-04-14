/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
 export interface CountryApiData {
    name: string,
    alpha2Code: string,
    alpha3Code: string,
    numericCode: string,
    curCode: string,
    curName: string,
    curSymbol: string
 }
 
 interface CountryApiRawData  {
    name: string,
    alpha2Code: string,
    alpha3Code: string,
    numericCode: string,
    currencies: {[key: string]: {name: string, symbol: string}}
}

 type CountryApiDataResponse = {[key: string]: CountryApiRawData}

export async function fetchCountryData() {
    const url = "https://countryapi.io/api/all";
    const apiKey = "WCi1ixOyyXQfP82FDJUCSchtUQEWa6fDIEq7L4Cz";
    const headers = { Authorization: `Bearer ${apiKey}` };
    const response = await fetch(url, { headers });
    const data = await response.json() as CountryApiDataResponse;
    const noUniqueCurCodes: any[] = [];
    const allCurCodes: (string | undefined)[] = [];

    const out = Object.entries(data).map(([key, data]) => {
        const crs = Object.entries(data.currencies).map(([key, value]) => ({curCode: key, curName: value.name, curSymbol: (value.symbol||'')}))
        
        // ----------------------------------
        // const isNotUnique = allCurCodes.find(val => val === crs[0]?.curCode);
        // if(isNotUnique) noUniqueCurCodes.push(crs[0]?.curCode)
        // allCurCodes.push(crs[0]?.curCode);

        return {
            name: data.name,
            alpha2Code: data.alpha2Code,
            alpha3Code: data.alpha3Code,
            numericCode: data.numericCode,
            ...crs[0]
        } as CountryApiData;
    }).sort((a, b) => a.name > b.name ? 1 : -1);

    
    // console.log({noUniqueCurCodes, allCurCodes})
    return out
}