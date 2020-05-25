const Discord = require('discord.js');
const fs = require('fs');
const rss = require('rss-converter');
const config = require('./config.json);
const link = require('./links.json');
const client = new Discord.Client();

client.on("ready", async () => {
    let feed = await rss.toJson('https://www.youtube.com/feeds/videos.xml?channel_id=' + config.channel_yt);
    const embed = new Discord.MessageEmbed()
    .setColor("#ff4fa7")
    .setAuthor("Youtube Notification", client.user.avatarURL(), "https://github.com/amistaa/youtube-notification")
    
    client.channel.cache.get(config.channel_id).send(embed)
    console.log(feed.items[0].media_group.media_description);
})
client.login(config.token);
