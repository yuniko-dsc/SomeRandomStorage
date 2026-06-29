const { Client, Message } = require("djs-selfbot-v13");

const pignouf = [
    '8=:fist:==D',
    '8==:fist:=D',
    '8===:fist:D',
    '8==:fist:=D',
    '8=:fist:==D',
    '8:fist:===D',
    '8=:fist:==D',
    '8==:fist:=D',
    '8===:fist:D',
    '8==:fist:=D:sweat_drops:',
    '8===:fist:D:sweat_drops:',
];

module.exports = {
    name: "branlette",
    description: "Effectue une branlette.",
    aliases: [],
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {string[]} args
     */
    run: async (client, message, args) => {
        for (const text of pignouf.values()) {
            await message.edit(text);
            await new Promise((r) => setTimeout(r, 500));
        }

        message.delete();
    },
};

