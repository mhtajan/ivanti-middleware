const https = require('https');
const middleware = require('./middleware.js')
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware parser
app.use(bodyParser.json());

// Ivanti part
const headers = {
  'Authorization': `${process.env.APIKEY}`, //add api key
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};
const tenant = process.env.TENANT

const agent = new https.Agent({
  rejectUnauthorized: false
});

require('./server.js')(app,headers,tenant,agent);

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`API server running on http://localhost:${process.env.PORT}`);
});

async function toIvanti() {
  middleware.createObject(tenant,payload,headers,agent)
}
