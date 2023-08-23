//Template for Create or Modify GML (Group Mail List) Service Request
//https://tgi-dev-v2.com.ph/HEAT
// /api/odata/businessobjects/[businessobject]+s/
// ServiceReq = Create or Modify GML business object
const axios = require('axios')

async function createModGML_POST(payload, headers, tenantURL) {
    try {
      await axios.post(`${tenantURL}/api/odata/businessobjects/ServiceReqs`, payload, { headers, httpsAgent: agent }) // add ivanti endpoint
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

module.exports = {
  createModGML_POST 
}