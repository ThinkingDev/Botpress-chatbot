const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();

// Init Middleware
app.use(express.json());

// parse application/x-www-form-urlencoded
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define Routes
app.get('/api/chatbot/:dealer_id', async (req, res) => {
  try {
    const { dealer_id } = req.params;
    console.log(dealer_id);
    res.json(dealer_id);
  } catch (e) {
    console.log(e);
  }
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, async () => {
  console.log(`Server started on ${PORT}`);
});
