const env = require('./.env')
const Telegraf = require('telegraf')
const Markup = require('telegraf/markup')
const bot = new Telegraf(env.token)
const tecladoAlimentos = Markup.keyboard([
  ['🐷 Porco', '🐮 Vaca', '🐑 Carneiro'],
  ['🐔 Galinha', '🐣 Ovo cozido'],
  ['🐟 Peixe', '🐙 Frutos do mar'],
  ['🍄sou vegano']
]).resize().oneTime().extra()
bot.start(async ctx => {
  await ctx.reply(`Seja bem vindo, ${ctx.message.from.first_name}!`)
  await ctx.reply(`Qual bebida você prefere?`,
      Markup.keyboard(['Coquinha Gelada', 'Um nescal bem quente?']).resize().oneTime().extra())
})
bot.hears(['O que você prefere uma','Coquinha Gelada', 'ou' ,'Um nescal bem quente?'], async ctx => {
   console.log(ctx.match)
  await ctx.reply(`Nossa! Eu também gosto de ${ctx.match}`)
  await ctx.reply('Qual a sua carne predileta?', tecladoAlimentos)
})
bot.hears('🐮 Boi', ctx => ctx.reply('Minha favorita!!!'))
bot.hears('🍄 sou vegano',
  ctx => ctx.reply('Obrigado, mais eu ainda amo carne'))
bot.on('text', ctx => ctx.reply('Legal!'))
 
bot.launch()