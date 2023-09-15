const testJS = require('./test/test.js')
const testGET = require('./functions/misc/testGET.js')

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
}