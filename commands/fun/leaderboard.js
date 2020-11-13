const {Client, Message, MessageEmbed, Guild} = require('../../lib/mieciekbot.js');

/**
 * @param {Client} bot 
 * @param {Message} msg 
 * @param {Array<String>} args 
 */
module.exports.run = async (bot, msg, args) => {
    await msg.guild.members.fetch();
    
    let server_users = await bot.db_manager.getServerUsers(msg.guild.id);
    server_users = server_users.filter(user => user.xp != 0);
    server_users.sort((a, b) => b.xp - a.xp);

    let rank_embed = new MessageEmbed(bot, msg.guild).setTitle(`${msg.guild.name} Leaderboard`);

    if(server_users.length == 0) rank_embed.addField('There are not any members in database.', '\u200b');
    else if(server_users.length < 10)
    {
        server_users.forEach((elem, i) => {
            rank_embed.addField(`${i+1}. @${msg.guild.members.cache.get(elem.userID).user.tag}`, `${elem.xp > 1000 ? (`${(elem.xp / 1000).toFixed(3)}K`) : (elem.xp.toFixed(2))} XP (Level ${elem.level})`);
        });
    }
    else if(server_users.length > 10)
    {
        for (let i = 0; i < 10; i++) {
            let elem = server_users[i];
            rank_embed.addField(`${i+1}. @${msg.guild.members.cache.get(elem.userID).user.tag}`, `${elem.xp > 1000 ? (`${(elem.xp / 1000).toFixed(3)}K`) : (elem.xp.toFixed(2))} XP (Level ${elem.level})`);
        }
    }
    
    msg.channel.send(rank_embed);
}

module.exports.help = {
    name: "leaderboard",
    aliases: [
        "rank"
    ],
    args: [],
    permission: "USER",
    description: "displays server activity leaderboard"
}