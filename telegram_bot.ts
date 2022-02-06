import { TelegramBot, UpdateType } from "https://deno.land/x/telegram_chatbot/mod.ts"
import "https://deno.land/x/dot_env@0.2.0/load.ts"

const TOKEN = ("5166222631:5251011040:AAEVjKYyBDO04ox5FF_qykeN4JdbBrDuurM");
if (!TOKEN) throw new Error("Bot token is not provided");
const bot = new TelegramBot(TOKEN);


// deno-lint-ignore no-explicit-any
bot.on(UpdateType.Message, async (message: any) => {

    const text = message.message.text || "I can't hear you";

    await bot.sendMessage({ chat_id: message.message.chat.id, text: `echo ${text}` })

});

bot.run({
    polling: true,
});