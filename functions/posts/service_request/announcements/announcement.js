const middleware = require('../../../../middleware')
const uri = process.env.ANNOUNCEMENT

const ancObj = {
    "Region" : "Global",
    "Subject" : `${ancSubject}`,
    "Description" : `${ancDesc}`,
    "Email" : `${ancEmail}`,
    "EffectiveDate" : `${ancEffDate}`,
    "ExpirationDate" : `${ancExpDate}`,
    "Status" : `${ancStatus}`
}
async function postAnc(headers,agent){
    await middleware.createObject(uri,ancObj,headers,agent)
}
module.exports = {
    postAnc
}