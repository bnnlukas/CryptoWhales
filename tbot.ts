import { TelegramBot, UpdateType } from "https://deno.land/x/telegram_chatbot/mod.ts"
import "https://deno.land/x/dot_env@0.2.0/load.ts"
import { CryptoPriceApi } from "./crypto_price_api.ts";
let test;
let output;
let shouldbeNumber: any;

const TOKEN = ("5244847781:AAEV5Sv3xPIFxDU_BNhtLhJnuSvnFayLELw");
if (!TOKEN) throw new Error("Bot token is not provided");
const bot = new TelegramBot(TOKEN);

// deno-lint-ignore no-explicit-any
bot.on(UpdateType.Message, async (message: any) => {

    const text : string = message.message.text || "I can't hear you";
    test = new CryptoPriceApi();
    output = test.getSpotPriceTelegram(text);    
    await bot.sendMessage({ chat_id: message.message.chat.id, text: `Ergebnis: ${output}` })

});

bot.run({
    polling: true,
});
