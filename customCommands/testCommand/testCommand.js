
module.exports = {
    name: "test",
    description: "Un simple test.",
    aliases: [],
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {string[]} args
     */
    run: async (client, message, args) => {
        await message.edit(
            client.t("coucou", { emoji, ms: Date.now() - start, ws })
        );
    },
};

