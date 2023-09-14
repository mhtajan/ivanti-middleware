const middleware = require('../../middleware.js')


async function reqtest_GET(payload, headers, tenantURL, agent){
    const uri = `${tenantURL}/api/odata/businessobject/so_number_tests`
    const SO_Obj = {
        SO_NUMBER: payload.SO_NUMBER
    }
    middleware.getObject(uri,payload,headers,agent)
}

module.exports = {
    reqtest_GET
}