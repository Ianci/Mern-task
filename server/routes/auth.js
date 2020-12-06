const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController')
const { check } = require('express-validator')

//api/auth
router.post('/',
[
  
    check('email', 'Please add a valid email').isEmail(),
    check("password", 'Please insert your password').not().isEmpty(),
   
    
],
authController.authUser
)

module.exports = router