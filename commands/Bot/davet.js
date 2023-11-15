const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("davet")
        .setDescription("Botun davet linklerini gösterir."),

    run: async (client, interaction) => {

        const embed = new EmbedBuilder()
            .setTitle("Lockrenzy Bot - İstatistik!")
            .setDescription(`> **Merhaba bütün sosyal linklerimizi alttaki butonlara basarak görebilirsiniz.**`)
            .setImage("https://cdn.discordapp.com/attachments/1156257224625242152/1174124789741391912/standard.gif?ex=656673ec&is=6553feec&hm=402355e201ee9b43159758e5e6ee4712fdb2c9cb9f4c7b910c584eeb297965fa&")
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel("Davet Et")
                    .setStyle(ButtonStyle.Link)
                    .setURL("https://discord.com/api/oauth2/authorize?client_id=1147267384709759129&permissions=8&scope=bot"),
                new ButtonBuilder()
                    .setLabel("Destek Sunucusu")
                    .setStyle(ButtonStyle.Link)
                    .setURL("https://discord.gg/gW36cxZJYM"),
                    
            )
        interaction.reply({ embeds: [embed], components: [row] })

    },
};
