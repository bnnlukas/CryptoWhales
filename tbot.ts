import { TelegramBot, UpdateType } from "https://deno.land/x/telegram_chatbot/mod.ts"
import "https://deno.land/x/dot_env@0.2.0/load.ts"
import { CryptoPriceApi } from "./crypto_price_api.ts";
let test;
let output;
let fiat;

const TOKEN = '5174997578:AAEWhS1Kc7RkKAlevKkNpEJzsTEbu7S9eZk';
if (!TOKEN) throw new Error("Bot token is not provided");
const bot = new TelegramBot(TOKEN);

// deno-lint-ignore no-explicit-any
bot.on(UpdateType.Message, async (message: any) => {

    const text : string = message.message.text || "I can't hear you";
    fiat = text.split('-')[1];
    test = new CryptoPriceApi();
    output = await test.getSpotPriceTelegram(text);    
    console.log(output);
    await bot.sendMessage({ chat_id: message.message.chat.id, text: `Der Preis liegt bei ${output} ${fiat}` })

});

bot.run({
    polling: true,
});
