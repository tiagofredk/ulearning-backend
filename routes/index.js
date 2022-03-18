const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authenticate');
const authController = require('../controller/auth');
const profileController = require('../controller/profile');

<<<<<<< HEAD
router.post('/login', authController.login);
router.get("/logout", authController.logout);
router.get("/verifytoken", authController.verifytoken);
router.post("/adduser", authController.adduser);
router.post("/message", authController.message);
=======
router.post("/message", authController.message)
>>>>>>> message

// all routes that come after this middleware are protected
// and can only be accessed if the user is logged in
router.use(authenticate);

router.post('/login', authController.login);
router.get("/logout", authController.logout);
router.get("/verifytoken", authController.verifytoken);
router.post("/adduser", authController.adduser);
router.get('/profile', profileController.profile);

module.exports = router;