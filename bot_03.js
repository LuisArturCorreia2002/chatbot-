const env = require('./.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.on('text', (ctx) => ctx.reply('Alo Ha Mundo!'))
 //Evento de localização
bot.on('location', async ctx => {
 const location = ctx.update.message.location
 const lat = location.latitude
 const lon = location.longitude
 console.log(location)
 await ctx.reply(`Entendido, você está em
     Lat: ${lat}, Lon: ${lon}!`)
 await ctx.replyWithLocation(lat, lon) 
})
 
bot.launch()