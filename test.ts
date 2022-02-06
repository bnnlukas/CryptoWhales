import { CryptoPriceApi } from './crypto_price_api.ts'
let test 

//test 1
test = new CryptoPriceApi();
console.log(typeof await test.getSpotPrice('LINK','EUR'));

//test 2
test = new CryptoPriceApi();
console.log(typeof await test.getBuyPrice('BTC','EUR'));

//test 3
test = new CryptoPriceApi();
console.log(typeof await test.getSellPrice('ETH','EUR'));

//test 3
test = new CryptoPriceApi();
console.log(typeof await test.getSpotPriceTelegram('ETH-EUR'));