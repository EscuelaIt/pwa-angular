const types = require('./types.js');
const categories = require('./categories.js');
const items = require('./items.js');

module.exports = app => {
    categories(app, '/categories');
    types(app, '/types');
    items(app, '/items');
}
