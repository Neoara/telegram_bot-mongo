const TelegramBot = require('node-telegram-bot-api');
const models = require('../Models');
const token = '5119989767:AAHYj18J_SXyzw-Zqtal6X4-meNGBzF_O0Y';
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/register/, async (msg) => {
    let fullName = msg.from.first_name;
    let chatId = msg.chat.id;

    let newUser = new models.User({fullName, chatId});
    await newUser.save();

    bot.sendMessage(msg.chat.id, "Вы успешно зарегистрированы!");
});

const sendMessage = (chatId, message) => {
    bot.sendMessage(chatId, message);
};

module.exports = {
    sendMessage
};