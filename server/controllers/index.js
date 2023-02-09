const db = require('../db');
const passport = require('passport');
const crypto = require('crypto');

exports.login = async (req, res) =>{
    const { id, password } = req.body;
    if (id == null || password == null) {
        return res.sendStatus(403);
    }
    try {
        const data = await db.query(
            'SELECT id, hashed_password FROM user_password WHERE id = $1',[id])

        if (data.rows.length === 0) {
            return res.sendStatus(403)
        }
        const user = data.rows[0]

        crypto.pbkdf2(password, SALT, 310000, 32, 'sha256', function (err, hashedPassword) {
            // if (err) { return res.sendStatus(403); }
            if (!crypto.timingSafeEqual(user.hashed_password, hashedPassword)) {
              return res.sendStatus(403);
            }
            
            req.session.user = {
                id: user.id,
            }

            res.status(200)
            return res.json({ user: req.session.user });
          });

    } catch (e) {
        console.error(e)
        return res.sendStatus(403)
    }
}