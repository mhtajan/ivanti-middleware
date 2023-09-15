const axios = require('axios')
const middleware = require('../middleware.js')

module.exports = {
    async reqtest_POST(payload, headers, tenantURL, agent) {
        const uri = `${tenantURL}/api/odata/businessobject/TestObjects`
        middleware.createObject(uri, payload, headers, agent)
    }
}