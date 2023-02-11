const db = require('../db');
// const session = require('express-session')
const passport = require('passport');
const crypto = require('crypto');
const SALT = '72';

exports.personalInfo = (req, res) => {
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
        if (id == null || password == null) {
            console.log("reg error");
            return res.sendStatus(403).json({
                message: "No null id or password"
            });
        }
        crypto.pbkdf2(password, SALT, 310000, 32, 'sha256', async (err, hashedPassword) => {
            if (err) { return res.sendStatus(403); }
            console.log("registration");

            const data = await db.query('INSERT INTO user_password (id, hashed_password) VALUES ($1, $2) returning id', [id, hashedPassword.toString('hex')]);

            const user = data.rows[0];
            
            req.session.user = {
                id: user.id
            }
            return res.json({
                user : req.session.user
            });
        });
        // return res.sendStatus(200);
    } catch (error) {
        console.log(error);
    }
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