//Template for Request for Invoice Service Request
//https://tgi-dev-v2.com.ph/HEAT
// /api/odata/businessobjects/[businessobject]+s/
// ServiceReq = Request for Invoice business object
const axios = require('axios')
const middleware = require('../../../../middleware.js')
async function reqInv_POST(payload, headers, tenantURL,agent) {
    const uri = `${tenantURL}/api/odata/businessobjects/ServiceReqs`
    middleware.createObject(uri,payload,headers,agent)
  }

  module.exports = {
    reqInv_POST
  }