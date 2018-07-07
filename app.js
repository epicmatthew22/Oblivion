var Discord = require('discord.js');
var bot = new Discord.Client();

bot.on('message', message => {
	var sender = message.author;
	var msg = message.content.toUpperCase();
	var prefix = '*!'
	let cont = message.content.slice(prefix.length).split(" ");
	let args = cont.slice(1);


    if (sender.id === '465162085761024001') {
    	return;
    }

	if (msg === prefix + 'PING') {
		message.channel.send({embed:{
			description:"Pong",
			color: 0xFF5733
		}})
	}

	if (msg === prefix + 'INFO') {
		message.author.send('**This is TheProGlitchers Offical Bot And Is Currently Still In the Works**')
	}

	if (message.channel.id === '465165686528802826') {
		if(isNaN(message.content)){
			message.delete()
			message.author.send('**Only Send Numbers please**')
		}
	}
    if(msg.includes('NIGGER')){
    	message.delete()
    	message.author.send('Dont Be Racist')
    }
    if(msg.includes('FUCK')){
    	message.delete()
    	message.author.send('Dont Swear')
    }
	if (msg === prefix + 'HELP') {
		message.author.send({embed:{
			description:"Commands:\n:stuck_out_tongue:  ***!help - shows this\n:smile: *!ping - replies with Pong\n:smirk: *!info - shows info about the bot\n:fire:*!purge <amount> - purges the ammount of messages**",
			color: 0xFF5733
		}})
	}
	if (msg.startsWith(prefix + 'PURGE')) {
		async function purge() {
			message.delete();
			if(!message.member.roles.find("name", "purge-acces")){
				message.channel.send('You need the purge-acces role to use this command ');
				return;
				console.log("A User attempted to purge messages")
			}
			if(isNaN(args[0])){
				message.channel.send('Please use a mumber as your prefix. \n how To use: ' + prefix + 'pure <ammount>');
				return;
			}

			const fetched = await message.channel.fetchMessages({limit: args[0]});
			console.log(fetched.size + "messages found now deleting...");

			message.channel.bulkDelete(fetched)
		}

		purge();


	}


});

bot.on('ready', () => {
	console.log("Online")

	bot.user.setStatus('Online')
	bot.user.setActivity('*!help and Im Live')
	bot.user.setGame('*!help and im live', 'https://www.twitch.tv/epicmatthew21')
})


bot.login('NDY1MTYyMDg1NzYxMDI0MDAx.DiJfdw.G52h0RedqK_NPgwNCwH51oPSfq4')