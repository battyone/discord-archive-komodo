#!/home/gcharang/.nvm/versions/node/v10.16.0/bin/node

const fs = require('fs');
const Discord = require("discord.js");
const client = new Discord.Client();
const {
    token,
    serverId
} = require("./config.json");

client.on('ready', () => {
    const myGuild = client.guilds.get(serverId);
    let channelIds = myGuild.channels.map(channel => {
        if (channel.type == 'text') {
            return channel.id
        } else {
            return 0
        }

    });
    let textChannels = {}
    myGuild.channels.forEach(channel => {
        if (channel.type == 'text') {
            textChannels[channel.id] = channel.name
        } else {
            return 0
        }
    });

    console.log(textChannels)

    fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
})

client.on("message", message => {

})

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

client.once("ready", () => {
    console.log("Ready!");
});
client.once("reconnecting", () => {
    console.log("Reconnecting!");
});
client.once("disconnect", () => {
    console.log("Disconnect!");
});

client
    .login(token)
    .then(console.log)
    .catch(console.error);