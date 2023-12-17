const mongoose = require('mongoose');

const ChatbotSchema = new mongoose.Schema({
    dealer_id: {
        type: String,
    },
})

module.exports = mongoose.model('chatbot', ChatbotSchema);