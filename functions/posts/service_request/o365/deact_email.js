//Template for Deactivation of Email Account Service Request
//https://tgi-dev-v2.com.ph/HEAT
// /api/odata/businessobjects/[businessobject]+s/
// ServiceReq = Deactivation of Email Account business object
const axios = require('axios')

async function deactEmail_POST(payload, headers, tenantURL) {
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
  deactEmail_POST
}