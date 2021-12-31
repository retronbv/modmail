const Discord = require('discord.js');
module.exports= (msg)=>{
  channel=msg.channel
  user = msg.guild.members.cache.get(channel.name);
  const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Ticket Closed!')
	.setDescription(`${msg.author.tag} has closed your ticket.`)
	//msg.channel.send("", {embed:exampleEmbed})
  user.send("", {embed:exampleEmbed})
  msg.channel.delete()
}