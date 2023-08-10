const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios')
const app = express();
const https = require('https');
require('dotenv').config
const port = 3000;

// Middleware parser
app.use(bodyParser.json());

// Routes
app.post('/api/items', (req, res) => {
  const newItem = req.body;
  //data.push(newItem);
  res.status(201).json(newItem);
  console.log(newItem)
});

app.post('/api/ticket', (req, res) => {
  const newItem = req.body;
  res.status(201).json(newItem);
  toIvanti(newItem)
});

// Start the server
app.listen(port, () => {
  console.log(`API server running on http://localhost:${port}`);
});


// Ivanti Part

const headers = {
  'Authorization': 'x', //add api key
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

const agent = new https.Agent({
  rejectUnauthorized: false
});

async function toIvanti(payload) {
  try {
    await axios.post(`x`, payload, { headers, httpsAgent: agent }) // add ivanti endpoint
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
