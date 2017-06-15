module.exports.useMiddleware = app => {
    const cors = require('cors');
    const bodyParser = require('body-parser')
    const express = require('express');

    app.use(cors());

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());
    app.use(express.static(__dirname + './../4-manifest/cash-flow/dist'));
    app.use((req, res, next) => {
        if (req.method == 'POST' && req.body) {
            console.log(`${req.method} ${req.originalUrl} ${JSON.stringify(req.body)}`);
        }
        else {
            console.log(`${req.method} ${req.originalUrl}`);
        }
        next();
    });
}


