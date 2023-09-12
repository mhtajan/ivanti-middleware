const testJS = require('./test/test.js')
const testpayload = require('./test/testpayload.json')
module.exports = function (app,headers,tenant,agent) {

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
}