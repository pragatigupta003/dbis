const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../db');
const crypto = require('crypto');

//from config.txt import salt
const SALT = '72';

validPassword = (password, hash, salt) => {
  var hashVerify = crypto.pbkdf2Sync(password, salt, 310000, 32, 'sha256').toString('hex');
  return hash === hashVerify;
}

genPassword = (password) => {
  var genHash = crypto.pbkdf2Sync(password, SALT, 310000, 32, 'sha256').toString('hex');
  return {
    hash: genHash
  };
}

passport.use(new LocalStrategy({ usernameField: "id", passwordField: "password" }, async (username, password, cb) => {
  console.log("local");
  try {
    const { rows } = await db.query(
      'SELECT id , hashed_password FROM user_password WHERE id = $1',
      [username]
    )

    if (!rows.length) {
      throw new Error('401 not authorized')
    }

    const isValid = validPassword(password, rows[0].hashed_password, SALT);
    console.log()
    if (isValid) {
      console.log("valid");
      return cb(null, username);
    } else {
      console.log(" not valid");
      return cb(null, false);
    }
  } catch (error) {
    console.log(error.message)
    cb(null, false)
  }
}));

passport.serializeUser((user, cb) => {
  console.log(user);
  cb(null, user);
});

passport.deserializeUser(async (id, cb) => {
  console.log("deserial");
  try {
    console.log(id);
    console.log('--kkk');
    const { rows }  = await db.query('SELECT id FROM user_password WHERE id = $1', [id]);
    console.log(rows);
    if (!rows.length) {
      throw new Error('401 not authorized')
    }
    return cb(null, rows[0].id);
  } catch (error) {
    console.log(error.message);
    return cb(error);
  }
});