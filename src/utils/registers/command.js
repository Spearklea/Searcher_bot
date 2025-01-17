const { readdirSync } = require("fs")
const { post } = require("axios")
const ID = "886046032616624138"

function sleep() {
 setTimeout(() => {
  return new Promise((resolve, reject) => {
   resolve("ok")
  })
 }, 2000)
}

module.exports = async function(guildID, file) {
 const prop = require(`../../commands/${file}`)
 if(guildID) {
  if(prop.limitations) {
   console.log(`Limitações em ${file} detectadas.`)
   if(prop.limitations.register) {
    if(props.limitations.register.local) return;
   }
  }
 }
 post(`https://discord.com/api/v8/applications/${ID}/guilds/${guildID}/commands`, prop.command, {
  headers: {
   Authorization: `Bot ${process.env.BOT_TOKEN}`
  }
 })
 } else {
  if(props.limitations) {
   console.log(`Limitações em ${file} detectadas.`)
   if(props.limitations.register) {
    if(props.limitations.register.global) return;
   }
  }
  post(`https://discord.com/api/v9/applications/${ID}/commands`, prop.command, {
   headers: {
    Authorization: `Bot ${process.env.BOT_TOKEN}`
   }
  })
 }
}