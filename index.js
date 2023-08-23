const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios')
const app = express();
const https = require('https');
require('dotenv').config();
<<<<<<< HEAD
var today = new Date();
=======
const port = 3000;

>>>>>>> a27a039c24ab6cfc11c48d11ac240243cb07d2e9
// Middleware parser
app.use(bodyParser.json());

// Routes
app.post('/api/items', (req, res) => {
  const newItem = req.body;
  res.status(201).json(newItem);
  console.log(newItem)
  console.log(today)
});

app.post('/api/ticket', (req, res) => {
  const newItem = req.body;
  res.status(201).json(newItem);
  toIvanti(newItem)
});

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`API server running on http://localhost:${process.env.PORT}`);
});


// Ivanti Part

const headers = {
  'Authorization': `${process.env.APIKEY}`, //add api key
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

const agent = new https.Agent({
  rejectUnauthorized: false
});

async function toIvanti(payload) {
  try {
    await axios.post(`${process.env.TENANT+process.env.ENDPOINT1}`, payload, { headers, httpsAgent: agent }) // add ivanti endpoint
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  } catch (error) {
    console.error(`Error at ${error}`)
  }
}
