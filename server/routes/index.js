const { ensureLoggedIn } = require('connect-ensure-login');
const {Router} = require('express');
const { personalInfo, logout, dummy, registration } = require('../controllers');
const { userAuth } = require('../middlewares/auth-middleware');

const router = Router();

router.post('/registration', registration);
router.get('/login', dummy);
router.post('/login', userAuth);
router.get('/home', ensureLoggedIn('/login'), personalInfo);
router.get('/logout', logout);
module.exports = router ;