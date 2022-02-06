import { TelegramBot, UpdateType } from "https://deno.land/x/telegram_chatbot/mod.ts"
import "https://deno.land/x/dot_env@0.2.0/load.ts"
import { Crypto_Price_Api } from './crypto_price_api.ts'

const TOKEN = Token;
if (!TOKEN) throw new Error("Bot token is not provided");
const bot = new TelegramBot(TOKEN);

bot.on(UpdateType.Message, async (message) => {

    const input = message.message.text || "I can't hear you";

    output = getSpotPrice_Telegram(input)

    await bot.sendMessage({ chat_id: message.message.chat.id, text: output })

});

bot.run({
    polling: true,
});