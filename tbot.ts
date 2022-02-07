import { TelegramBot, UpdateType } from "https://deno.land/x/telegram_chatbot/mod.ts"
import "https://deno.land/x/dot_env@0.2.0/load.ts"
import { CryptoPriceApi } from "./crypto_price_api.ts";
let test;
let output;
let fiat;
let crypto;

const TOKEN = Deno.env.get('TOKEN');
if (!TOKEN) throw new Error("Bot token is not provided");
const bot = new TelegramBot(TOKEN);

// deno-lint-ignore no-explicit-any
bot.on(UpdateType.Message, async (message: any) => {

    const text : string = message.message.text || "I can't hear you";
    fiat = text.split('-')[1];
    crypto = text.split('-')[0];
    test = new CryptoPriceApi();

    try{
        output = await test.getSpotPriceTelegram(text)
        await bot.sendMessage({ chat_id: message.message.chat.id, text: `Der ${crypto} Preis liegt bei ${output} ${fiat}` })
    }
    catch(error){
        await bot.sendMessage({ chat_id: message.message.chat.id, text: `Dieses Paar ist bei Coinbase nicht gelistet. Geben Sie ein gültiges Paar ein. Alle gültigen Paare finden Sie auf der folgenden Website: https://www.coinbase.com/de/price` })

    }
});

bot.run({
    polling: true,
});
