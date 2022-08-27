const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authenticate');
const authController = require('../controller/auth');
const profileController = require('../controller/profile');

router.post("/message", authController.message);
router.get("/verifytoken", authController.verifytoken);
router.post('/login', authController.login);
router.get("/logout", authController.logout);
router.post("/adduser", authController.adduser);

// all routes that come after this middleware are protected
// and can only be accessed if the user is logged in
router.use(authenticate);

router.get('/profile', profileController.profile);

module.exports = router;