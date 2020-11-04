const env = require('./.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)
 
bot.use(async (ctx, next) => {
 const start = new Date()
 await next()
 const tempoResposta = new Date() - start
 const dataEHora = new Date().toLocaleString();
 console.log(`${dataEHora}\nTempo de resposta: ${tempoResposta}ms`, )
})
 
bot.start( async (ctx) => {
 const from = ctx.message.from
 from.id = undefined //Para ocultar o id
 console.log(from)
 await ctx.reply(`Olá ${from.username}, o teu nick é: \
 ${from.first_name} ${from.last_name}!`) 
})
 
bot.on('text', (ctx) => ctx.reply('Eae parça'))
 
bot.launch()