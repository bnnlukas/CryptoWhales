# CryptoWhales

 ## Creating a deno module

 Started by creating a modul which shows the current price of each currency listed on Coinbase.

 https://github.com/bnnlukas/crypto_price_api

 ## Telegram Bot

 Then we wanted to develop a Telegram Bot to display the current cryptoprice to the user.

 Using the Deno module: https://deno.land/x/telegram_chatbot@v1.0.0 with our module to handle the userinput.

 The name of our Telegram Bot is: @WWI20DSAGetCryptoPricesBot
 
 ### Usage
 
 Start the Bot by typing in /start. Then you can type in the cryptocurrency in the following form:
 
 cryptocurrency-fiatcurrency // e.g. BTC-USD
 
 The output is the current spot price of the cryptocurrency.
 
 ### Error Handling
 
 To deal with wrong inputs of the user, we did a try and catch istruction:
 
 
 ```ruby
try{
     output = await test.getSpotPriceTelegram(text)
     await bot.sendMessage({ chat_id: message.message.chat.id, text: `Der ${crypto} Preis liegt bei ${output} ${fiat}` })
 }
 catch(error){
     await bot.sendMessage({ chat_id: message.message.chat.id, text: `Dieses Paar ist bei Coinbase nicht gelistet. Geben Sie ein gültiges Paar ein. Alle gültigen Paare finden Sie auf der folgenden Website: https://www.coinbase.com/de/price` })

 }
 ```


