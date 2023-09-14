const axios = require('axios')
const lookUP = require('./functions/misc/lookup')
async function createObject(uri,payload,headers,agent){
    try {
        await axios.post(`${uri}`, payload, { headers, httpsAgent: agent }) // add ivanti endpoint
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

//for testing need refactor
async function getObject(uri,payload,headers,agent){
    try {
      await axios.get(`${uri}`, {headers, httpsAgent: agent})
    .then(response => {
      const SO_Obj = {
        SO_NUMBER: payload.SO_NUMBER
      }
      data = response.data
      //console.log(data.value)
      data.value.some((obj) => {
         for (const key in SO_Obj) {
           if (obj[key] !== SO_Obj[key]){
             return;
           }
           else{
            delete payload.SO_NUMBER
             payload.SO_BILL_TO_PARTY_CODE_RecID = obj.RecId
             console.log(payload)
             const postURI = process.env.TENANT+process.env.ENDPOINT1
             //console.log(postURI)
             createObject(postURI,payload,headers,agent)
           }
         }
      })
    })
    } catch (error) {
      console.error(error)
    }
}
module.exports = {
    createObject,getObject
};