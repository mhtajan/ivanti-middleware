const axios = require('axios')
const middleware = require('../middleware.js')
async function reqtest_POST(payload, headers, tenantURL,agent) {
    const uri = `${tenantURL}/api/odata/businessobject/TestObjects`
    middleware.createObject(uri,payload,headers,agent)
  }

  module.exports = {
    reqtest_POST
  }