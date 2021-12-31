const token = process.env.token, Discord = require('discord.js'), client = new Discord.Client();

const alive = require("./alive");
alive();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => {
	if (msg.author.id === client.user.id) { return }
	if (msg.content.startsWith('>')) {
		if (msg.content.length > 1) {
			try {
				var cmd = require(__dirname +
					'/commands/' +
					msg.content.split('>')[1] +
					'.js');
				cmd(msg);
			} catch (e) {
			  if (e.code !== 'MODULE_NOT_FOUND') {
          msg.reply('```' + e + '```');
				  console.log(e);
        } else {
          //msg.reply('that command doesn\'t exist')
        }
				
			}
		} else {
			msg.reply('I need a command! Try `?help`');
		}
	} else if (msg.channel.type === 'dm') {
	  var server = client.guilds.cache.get(process.env.guild_id); 
	  channel = server.channels.cache.find(
			c => c.name == msg.author.id && c.type == 'text'
		);
		if (!!channel) {
			//console.log(msg.author.displayAvatarURL)
		embedy = new Discord.MessageEmbed()
	      .setColor('#0099ff')
	      .setTitle('New Message')
	      .setDescription(`${msg.content}`)
	      .setFooter(msg.author.tag, msg.author.displayAvatarURL())
	   hi = msg.attachments
	  //console.log(hi)
	  attachments = []
	  hi.forEach((item,i)=>{
	    attachments.push(new Discord.MessageAttachment(item.url, item.name))
	  });
	  //console.log(attachments)
	  channel.send("", {embed:embedy,files:attachments})
		//msg.react("👍")
		}
	} else if (msg.channel.topic == "Support Ticket") {
	  //console.log(msg.guild.members.cache.array())
	  user = msg.guild.members.cache.get(msg.channel.name);
	  embedy = new Discord.MessageEmbed()
	      .setColor('#0099ff')
	      .setTitle('New Message')
	      .setDescription(`${msg.content}`)
	      .setFooter(msg.author.tag, msg.author.displayAvatarURL())
	  hi = msg.attachments
	  //console.log(hi)
	  attachments = []
	  hi.forEach((item,i)=>{
	    attachments.push(new Discord.MessageAttachment(item.url, item.name))
	  });
	  //console.log(attachments)
	  user.send("", {embed:embedy,files:attachments})
	  //msg.react("👍")
	}
});

client.login(token);