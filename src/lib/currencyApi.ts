export interface CurrencyApiData {
    date: string,
    base: string,
    rates: {[key:string]:string}
 }
 


export async function fetchCurrencyData({
    base= 'USD'
}: {base?: string}) {
    const apiKey = "b2e77b2164ab4dd6b23c9d71c65609df";
    const url = `https://api.currencyfreaks.com/v2.0/rates/latest?base=${base}&apikey=${apiKey}`;
    const headers = { Authorization: `Bearer ${apiKey}` };
    const response = await fetch(url, { headers });
    const data = await response.json() as CurrencyApiData;
    // console.log(data)
    return data;
}