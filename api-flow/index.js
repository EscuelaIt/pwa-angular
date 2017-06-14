const express = require('express');
const app = express();
const middleware = require('./middleware');

middleware.useMiddleware(app);
require('./webpush')(app);
require('./api/index')(app);

app.listen(3030);
console.log('listening on port 3030');

