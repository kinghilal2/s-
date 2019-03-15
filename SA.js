const Discord = require('discord.js');
const client = new Discord.Client();
var perfix = "-"
const prefix = "-"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on ("guildMemberAdd", member => {

   var role = member.guild.roles.find ("name", "Member");
   member.addRole (role);

})

client.on("guildMemberAdd", member => {
  client.channels.find('name', 'welcome').send(`**welcome to Server : [ ${member} ]**`)
});

client.on('message', message => {
    if (message.author.bot) return;
if (message.content.startsWith(prefix + 'clear')) { //Codes
    if(!message.channel.guild) return message.reply('⛔ | This Command For Servers Only!');
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔ | You dont have **MANAGE_MESSAGES** Permission!');
        if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔ | I dont have **MANAGE_MESSAGES** Permission!');
 let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 99) return message.reply("**🛑 || يجب ان يكون عدد المسح أقل من 100 .**").then(messages => messages.delete(5000))
    if(!messagecount) args = '100';
    message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
    message.channel.send(`\`${args}\` : __عدد الرسائل التي تم مسحها __ `).then(messages => messages.delete(5000));
  }
  });

  client.on("message", async message => {
    if(message.content == prefix + "server") {
        if(!message.channel.guild) return;
            if(!message.member.hasPermission("MANAGE_GUILD")) {
                return message.channel.send("ليس لديك الصلآحية الكآفية . 💔");
            }

                let server = new Discord.RichEmbed()
                    .setAuthor(message.guild.name)
                    .setColor("RANDOM")
                    .setTitle("Server Info ♥ ✨")
                    .setDescription(`Members 👤 : ${message.guild.memberCount}\nOwner 👑 : ${message.guild.owner.user.username}\nServer ID 🆔 : ${message.guild.id}\nRoles 🔒 : ${message.guild.roles.size}\nRegion 🌍 : ${message.guild.region.toUpperCase()}`);

                    message.channel.sendEmbed(server);

    }
});

client.on('message', message => {
    if (message.author.bot) return;
if (message.content.startsWith(prefix + 'clear')) { //Codes
    if(!message.channel.guild) return message.reply('⛔ | This Command For Servers Only!');
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔ | You dont have **MANAGE_MESSAGES** Permission!');
        if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔ | I dont have **MANAGE_MESSAGES** Permission!');
 let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 99) return message.reply("**🛑 || يجب ان يكون عدد المسح أقل من 100 .**").then(messages => messages.delete(5000))
    if(!messagecount) args = '100';
    message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
    message.channel.send(`\`${args}\` : __عدد الرسائل التي تم مسحها __ `).then(messages => messages.delete(5000));
  }
  });

  client.on('message' , message => {
    if(message.author.bot) return;
    if(message.content.startsWith(prefix + "ping")) {
   message.channel.send('pong').then((msg) => {
  var PinG = `${Date.now() - msg.createdTimestamp}`
  var ApL = `${Math.round(client.ping)}`
        msg.edit(`\`\`\`javascript\nTime taken: ${PinG} ms.\nDiscord API: ${ApL} ms.\`\`\``);
   })
    }
   });

   client.on('message', msg => {
var prefix = "-";
  if(!msg.guild) return;
    if (msg.content.startsWith(prefix +'cy')) {
     let args = msg.content.split(" ").slice(1);
    if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
let ra3d = new Discord.RichEmbed()
.setThumbnail(msg.author.avatarURL)
.setDescription(`ان كنت تريد انشاء للمستند اظغط علي الايموجي📝`)
.setFooter('لديك دقيقه للاختيار')
msg.channel.send(ra3d).then(message => {


 message.react('📝').then(r=>{


 let Category = (reaction, user) => reaction.emoji.name === '📝' && user.id === msg.author.id;

 let cy  = message.createReactionCollector(Category, { time: 60000 });

cy.on("collect", r => {
msg.guild.createChannel(args.join(' '), 'category');
    msg.channel.send(`☑ تم انشاء المستند بنجاح : \`${args}\``)
    msg.delete();
})
})
})
}
});

client.login('NTQ4OTM4MDEyNTIwNjExODU1.D2xBYg.qbO3H8-l323LprZOz5Lf9nuTHnc');
