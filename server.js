const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const Chatbot = require('./models/Chatbot');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// parse application/x-www-form-urlencoded
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define Routes
app.post('/api/chatbot/set-id', async (req, res) => {
  try {
    const { dealer_id } = req.body;
    const chatbot = await Chatbot.findOne({}).sort({ '_id': 1 })
    if (chatbot) {
      await Chatbot.updateOne({_id: chatbot._id}, {$set: {dealer_id}})
    } else {
      const newChatbot = new Chatbot({ dealer_id })
      await newChatbot.save();
    }
    res.send('Dealer Id was successfully saved')
  } catch (e) {
    console.log(e);
  }
});

app.get('/api/chatbot/get-id', async (req, res) => {
  try {
    const chatbot = await Chatbot.findOne({}).sort({ '_id': 1 })
    if (!chatbot) {
      return res.status(400).json({'error': 'DealerId does not exists'})
    }     
    res.json(chatbot.dealer_id);
  } catch (e) {
    console.log(e);
  }
});

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/dist'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, async () => {
  console.log(`Server started on ${PORT}`);
});
