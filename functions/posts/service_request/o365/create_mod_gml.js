//Template for Create or Modify GML (Group Mail List) Service Request
//https://tgi-dev-v2.com.ph/HEAT
// /api/odata/businessobjects/[businessobject]+s/
// ServiceReq = Create or Modify GML business object
const axios = require('axios')
const middleware = require('../../../../middleware.js')
module.exports = {
  async createModGML_POST(payload, headers, tenantURL,agent, childpayload) {
    try {
      const uri = tenantURL+process.env.SR
      const response = middleware.createObject(uri,payload,headers,agent)
    } catch (error) {
      console.error(`Error at ${error}`)
    }
  }
}