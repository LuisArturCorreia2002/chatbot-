//https://github.com/telegraf/telegraf/blob/develop/docs/examples/media-bot.js
const env = require('./.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)
 
const gifTelegram = 'https://media.giphy.com/media/ya4eevXU490Iw/giphy.gif'
 
bot.start(async ctx => {
  await ctx.reply(`Seja bem vindo, ${ctx.message.from.first_name}! 😎`)
 
  await ctx.reply('8ª maravílha do mundo https://www.youtube.com/watch?v=VgDgWzBL7s4')
 
  await ctx.replyWithHTML(`Destacando mensagem <b>HTML</b>
      <i>de várias</i> <code>formas</code> <pre>possíveis</pre>
      <a href="https://www.youtube.com/?hl=pt&gl=BR">Youutbe</a>`)
 
  await ctx.replyWithMarkdown('Destacando mensagem *Markdown*'
      + ' _de várias_ `formas` ```possíveis```'
      + ' [Google](http://www.google.com)')
 
 
  await ctx.replyWithPhoto('https://picsum.photos/200/300/?random',
      { caption: 'Foto com legenda' })
 
  await ctx.replyWithPhoto({ url: 'https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2020/04/legiao_zxgICM4ujVLa.jpg.jpeg' })
})
bot.launch()