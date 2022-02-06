let fiatCurrency: string;
let cryptoCurrency: string;
let currencyPair:string;
let test;

export class CryptoPriceApi {

    async getSpotPrice(cryptoCurrency:String, fiatCurrency:String) {
        let data = await fetch(`https://api.coinbase.com/v2/prices/${cryptoCurrency}-${fiatCurrency}/spot`);
        let json = await data.json();
        return parseInt(json.data.amount);
    }
    async getBuyPrice(cryptoCurrency:String, fiatCurrency:String) {
        let data = await fetch(`https://api.coinbase.com/v2/prices/${cryptoCurrency}-${fiatCurrency}/buy`);
        let json = await data.json();
        return parseInt(json.data.amount);
    }
    async getSellPrice(cryptoCurrency:String, fiatCurrency:String) {
        let data = await fetch(`https://api.coinbase.com/v2/prices/${cryptoCurrency}-${fiatCurrency}/sell`);
        let json = await data.json();
        return parseInt(json.data.amount);
    }
    async getSpotPriceTelegram(currencyPair:String) {
        let data = await fetch(`https://api.coinbase.com/v2/prices/${currencyPair}/spot`);
        let json = await data.json();
        return parseInt(json.data.amount);
    }
}

