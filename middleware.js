const axios = require('axios')

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

module.exports = {
    createObject
};