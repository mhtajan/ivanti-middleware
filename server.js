const testJS = require('./test/test.js')
const testGET = require('./functions/misc/testGET.js')
const createModGML_POST = require('./functions/posts/service_request/o365/create_mod_gml.js')
module.exports = async function (app,headers,tenant,agent) {

  // Routes
  app.post('/api/items', (req, res) => {
    const newItem = req.body;
    res.status(201).json(newItem);
    console.log(newItem)
    //console.log(today)
  });

  app.post('/test', (req, res) => {
    const test = req.body;
    res.status(201).json(test);
    testJS.reqtest_POST(test,headers,tenant,agent)
  })

  app.post('/api/ticket', (req, res) => {
    const newItem = req.body;
    res.status(201).json(newItem);
    toIvanti(newItem)
  });
  app.get('/test/get', async(req,res) => {
    const payload = req.body
    console.log(req.body)
    await testGET.reqtest_GET(payload,headers,tenant,agent)
    res.status(201).json(req.body)
  })
  app.post('/test/SR/CreateGML', async(req,res) => {
    const payload = req.body.payload
    const childpayload = req.body.childpayload
    createModGML_POST.createModGML_POST(payload,headers,tenant,agent,childpayload)
    res.status(201)
  })
}