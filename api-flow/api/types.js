module.exports = (app, url) => {

  const types = [{
    _id: 1,
    text: 'Income'
  }, {
    _id: 2,
    text: 'Expense'
  }];

  app.get(url, (req, res) => res.json(types));
}
