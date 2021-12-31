const Discord = require('discord.js');
const botCreators="@retronbv"
const botIcon = process.env.bot_icon
const botName = process.env.bot_name
module.exports=(msg)=>{
	var embed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Help')
	.setAuthor(botName, botIcon)
	.setDescription('Stop, Get Some help')
	.setThumbnail(botIcon)
	.addFields({ name: 'Help', value: 'Get this message', inline: true },{ name: 'Mod', value: 'Open a support ticket. Use this command in dms', inline: true })
	.setFooter('Made by '+botCreators, botIcon)
	.setTimestamp();
	msg.channel.send(String(msg.author),{embed})
}