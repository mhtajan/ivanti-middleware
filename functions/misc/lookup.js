const middleware = require('../../middleware')

const postURI = process.env.TENANT + process.env.ENDPOINT1

module.exports = {
    async lookUp(input, payload, body, headers, agent) {
        body.value.some(async (obj) => {
            for (const key in input) {
                if (obj[key] !== input[key]) {
                    return;
                }
                else {
                    delete payload.SO_NUMBER
                    payload.SO_BILL_TO_PARTY_CODE_RecID = obj.RecId
                    const response = await middleware.createObject(postURI, payload, headers, agent)
                    console.log(response)
                }
            }
        })
    }
}