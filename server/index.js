const express = require("express");
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');
// const bodyParser = require('body-parser');
const fs = require("fs");

const server = express();

require('./middlewares/passport-middleware');

//middlewares
server.use(cors({ origin: 'http://localhost:3005', credentials: true }));

server.use(express.json());
server.use(express.urlencoded({extended: true}));
//maxAge attribute

server.use(
    session({
        secret: 'mahadev1/0',
        resave: false,
        saveUninitialized: true,
    })
);

server.use(passport.initialize());
server.use(passport.session());

//routes
const routes = require('./routes');

server.use(routes);

let config_val = fs.readFileSync("./config.txt").toString().replace("\n", " ").split(" ");

const PORT = Number(config_val[2]);

server.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
})