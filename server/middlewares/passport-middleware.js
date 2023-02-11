const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../db');
const crypto = require('crypto');

//from config.txt import salt
const SALT = '72';

passport.use(new LocalStrategy((id, password, cb) => {

  db.query('SELECT * FROM user_password WHERE id = $1', [id], function (err, res) {
    const user = res.rows[0];
    if (err) { 
      console.log("local error");
      return cb(err); }
    if (!res) { 
      console.log("local error res not found");
      return cb(null, false, { message: 'Username does not exist.' }); }

    crypto.pbkdf2(password, SALT, 310000, 32, 'sha256', function (err, hashedPassword) {
      if (err) { return cb(err); }
      if (!crypto.timingSafeEqual(user.hashed_password, hashedPassword)) {
        return cb(null, false, { message: 'Incorrect password.' });
      }    
      console.log("local error pass not found");
      return cb(null, user);
    });
  });
}));

passport.serializeUser( (user, cb) => {
  process.nextTick( () => {
    cb(null, user.id);
  });
});

passport.deserializeUser( (id, cb) => {
  process.nextTick( () => {
    return cb(null, id);
  });
});