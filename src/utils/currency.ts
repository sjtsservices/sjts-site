
const intl = new Intl.NumberFormat("en-IN", {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
})

function format (num: number){
    return intl.format(num);
}

export const Currency = {
    format
}