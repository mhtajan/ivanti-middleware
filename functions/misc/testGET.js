const middleware = require('../../middleware.js');
const lookUp = require('./lookup.js')

module.exports = {
    async reqtest_GET(payload, headers, tenantURL, agent) {
        const uri = `${tenantURL}/api/odata/businessobject/so_number_tests`;
        const SO_Obj = {
            SO_NUMBER: payload.SO_NUMBER,
        };
        try {
            const response = await middleware.getObject(uri, payload, headers, agent);
            lookUp.lookUp(SO_Obj, payload, response, headers, agent)
        } catch (error) {
            console.error(error);
        }
    }
};
