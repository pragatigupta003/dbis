const db = require('../db');
// const session = require('express-session')
const passport = require('passport');
const crypto = require('crypto');
const SALT = '72';

exports.personalInfo = (req, res) =>{
    try {
        console.log("Success Home");
        return res.status(200).json({
            success: true
        });
    } catch (error) {
        console.log("personalInfo Error");   
    }
}

exports.dummy = async (req, res) => {
    try {
        console.log("Success Check");
        const data = await db.query('SELECT id from user_password');
        console.log(data);
        return res.status(200).json({
            success: true,
            message: "dummy ran",
            value: data.rows
        });
    } catch (error) {
        console.log("Error");
    }
}

exports.registration = async (req, res) => {
    try {
        const { id, password } = req.body;
    if(id == null || password == null){
        console.log("reg error");
        return res.sendStatus(403).json({
            message: "No null id or password"
        });
    }
    crypto.pbkdf2(password, SALT, 310000, 32, 'sha256', function (err, hashedPassword) {
        if (err) { return res.sendStatus(403); }
        
        db.query('INSERT INTO user_password (id, hashed_password) VALUES ($1, $2)', [id, hashedPassword], function (err, data) {
            if (err) { 
                console.log("local error");
                return res.sendStatus(403); }

            const user = data.rows[0];

            req.session.user = {
                id : user.id
            }
        });
                
        res.status(200)
        return res.json({ user: req.session.user })
      });
    } catch (error) {
        console.log("error");
    }
    const { id, password } = req.body;
    if(id == null || password == null){
        console.log("reg error");
        return res.sendStatus(403).json({
            message: "No null id or password"
        });
    }
    crypto.pbkdf2(password, SALT, 310000, 32, 'sha256', function (err, hashedPassword) {
        if (err) { return res.sendStatus(403); }
        
        db.query('INSERT INTO user_password (id, hashed_password) VALUES ($1, $2)', [id, hashedPassword], function (err, data) {
            if (err) { 
                console.log("local error");
                return res.sendStatus(403); }

            const user = data.rows[0];

            req.session.user = {
                id : user.id
            }
        });
                
        res.status(200)
        return res.json({ user: req.session.user })
      });
}

exports.logout = async (req, res) => {
    try {
        await req.session.destroy();
        return res.sendStatus(200);
    } catch (error) {
        console.error(e);
        return res.sendStatus(500);
    }
}