module.exports = (app, url) => {

  const categories = [{
    _id: 1,
    text: 'Payroll',
    typeId: 1
  }, {
    _id: 2,
    text: 'Sales',
    typeId: 1
  }, {
    _id: 3,
    text: 'Interests',
    typeId: 1
  }, {
    _id: 4,
    text: 'Mortgage',
    typeId: 2
  }, {
    _id: 5,
    text: 'Purchases',
    typeId: 2
  }, {
    _id: 6,
    text: 'Debits',
    typeId: 2
  }, {
    _id: 7,
    text: 'Taxes',
    typeId: 2
  }];

  app.get(url, (req, res) => res.json(categories));
}