const { SlashCommandBuilder } = require('discord.js');

//takes in two numbers and adds them together. Yay!
module.exports = {
	data: new SlashCommandBuilder()
		.setName('addition')
		.setDescription('Does addition!')
        .addIntegerOption(option => 
            option.setName('num1')
            .setDescription('The first number')
            .setRequired(true))
        .addIntegerOption(option => 
            option.setName('num2')
            .setDescription('The second number')
            .setRequired(true)),
	async execute(interaction) {
		const num1 = interaction.options.getInteger('num1');
        const num2 = interaction.options.getInteger('num2');
        const result = num1 + num2;
        await interaction.reply(`The result is ${result}`);
	},
};
