const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios')
const app = express();
require('dotenv').config
const port = 3000;

// Middleware parser
app.use(bodyParser.json());

// Routes
app.get('/api/items', (req, res) => {
  //res.json(data);
});

app.post('/api/items', (req, res) => {
  const newItem = req.body;
  //data.push(newItem);
  res.status(201).json(newItem);
  console.log(newItem)
});
app.post('/api/ticket', (req, res) => {
    const newItem = req.body;
    //data.push(newItem);
    res.status(201).json(newItem);
    toIvanti(newItem)
  });


// Start the server
app.listen(port, () => {
  console.log(`API server running on http://localhost:${port}`);
});


// Ivanti Part
const TENANT = process.env.TENANT;
const API_KEY = process.env.APIKEY;
async function toIvanti(payload){
    try {
        const response = await axios.post(`${TENANT}/api/odata/businessobject/incidents/${payload.incidentID}`,payload)
        console.log(response)
    } catch (error) {
        console.error(`Error at ${error}`)
    }
}
