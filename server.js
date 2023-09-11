module.exports = function (app) {

  // Routes
  app.post('/api/items', (req, res) => {
    const newItem = req.body;
    res.status(201).json(newItem);
    console.log(newItem)
    //console.log(today)
  });

  app.post('/test', (req, res) => {
    res.status(201)
  })

  app.post('/api/ticket', (req, res) => {
    const newItem = req.body;
    res.status(201).json(newItem);
    toIvanti(newItem)
  });
}