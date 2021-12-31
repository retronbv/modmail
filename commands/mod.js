const Discord = require('discord.js');
module.exports = msg => {
  if (msg.channel.type !== 'dm') {
    msg.reply("This command only works in DMs!")
    return;
  }
	var server = msg.client.guilds.cache.get(process.env.guild_id); 
	var name = msg.author.id;
	alreadyMade = server.channels.cache.find(
		c => c.name == name && c.type == 'text'
	);
	//console.log(!alreadyMade)
	if (!!alreadyMade) {
		msg.channel.send('you already have a channel');
	} else {
		server.channels.create( name, 'text').then(c => {
			let category = server.channels.cache.find(
					c => c.name.toLowerCase() == 'support queue' && c.type == 'category'
				),
				channel = server.channels.cache.find(
					c => c.name == name && c.type == 'text'
				);
				channel.setTopic("Support Ticket")
				//msg.reply("Done! <#"+channel.id+">")
				const exampleEmbed = new Discord.MessageEmbed()
	      .setColor('#0099ff')
	      .setTitle('Support Ticket created!')
	      .setDescription('Messages below will be send to moderators!')
	      msg.channel.send("", {embed:exampleEmbed})
	      const Embed = new Discord.MessageEmbed()
	      .setColor('#0099ff')
	      .setTitle('Support Ticket created!')
	      .setDescription(`${msg.author.tag} has opened this ticket!`)
	      channel.send("", {embed:Embed})
			if (category && channel) channel.setParent(category.id);
			
			else
				throw `One of the channels is missing:\nCategory: ${!!category}\nChannel: ${!!channel}`;
		});
		
	}
};
