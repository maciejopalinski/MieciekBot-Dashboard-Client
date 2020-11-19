const {bot} = require('../index.js');

bot.on('guildMemberRemove', member => {
    bot.db_manager.deleteUser(member.guild.id, member.id);

    if(bot.announce_opts.remove_member) bot.announce(undefined, `<@${member.id}> left the server.`);
});

bot.on('guildMemberAdd', member => {
    if(bot.announce_opts.add_member) bot.announce(undefined, `<@${member.id}> joined the server.`);
});