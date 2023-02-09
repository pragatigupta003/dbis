const express = require("express");
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');
const fs = require("fs");

const server = express();

//middlewares
app.use(express.json());
app.use(cors({origin:'http://localhost:3005', credentials: true}));

//maxAge attribute

app.use(
    session({
        secret: 'mahadev1/0',
        resave: false,
        saveUninitialized: true,
    })
    );
    
    
require('./middlewares/passport-middleware');

app.use(passport.initialize());

//routes
const routes = require('./routes');

app.use(routes);

let config_val = fs.readFileSync("./config.txt").toString().replace("\n", " ").split(" ");

const PORT = Number(config_val[2]);

server.listen(PORT, () =>{
    console.log(`server listening on port ${PORT}`);
})