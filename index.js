import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi = new Freecurrencyapi('fca_live_5J92sEkvg5OhDniRNfOywRmWdUjn2Iek4vbVk9JG');


export async function convertCurrency(fromCurrency,toCurrency,Units){
 const res=await freecurrencyapi.latest({
    base_currency:fromCurrency,
    currencies:toCurrency
})
const multiplier=res.data[toCurrency]
return multiplier*Units

}