let items = [];

module.exports = (app, url) => {

  // /items
  app.route(url)
    .get((req, res) => {
      if (items && items.length > 0)
        res.json(items);
      else
        res.status(204).send();
    })
    .post((req, res) => {
      let newItem = req.body
      newItem._id = new Date().getTime().toString();
      items.push(newItem);
      app.sendNotification(newItem.amount + '€ more!!!', newItem._id);
      res.status(201).json(newItem);
    })
    .delete((req, res) => {
      items = [];
      res.status(204).send();
    });
  // /items/159
  app.route(`${url}/:_id`)
    .get((req, res) => {
      let itemsFound = getItemById(req.params._id);
      if (itemsFound && itemsFound.length > 0)
        res.json(itemsFound[0]);
      else
        res.status(404).send();
    })
    .put((req, res) => {
      let itemsFound = getItemById(req.params._id);
      if (itemsFound && itemsFound.length > 0) {
        itemsFound[0] = req.body;
        res.json(itemsFound[0]);
      } else {
        res.status(404).send();
      }

    })
    .delete((req, res) => {
      let indexFound = getIndexById(req.params._id);
      if (indexFound >= 0) {
        items.splice(indexFound, 1);
        res.status(204).send();
      } else {
        res.status(404).send();
      }
    });


  var getItemById = (id) => items.filter(i => i._id == id);
  var getIndexById = (id) => items.findIndex(i => i._id == id);


  var resError = (err, res) => {
    console.error(err);
    res.status(500).send(err);
  }
}