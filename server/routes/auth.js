const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController')
const { check } = require('express-validator')
const auth = require('../middlewares/auth')
//api/auth
router.post('/',
[
  
    check('email', 'Please add a valid email').isEmail(),
    check("password", 'Please insert your password').not().isEmpty(),
   
    
],
authController.authUser
)

router.get('/',
    auth,
    authController.getUser
)

module.exports = router