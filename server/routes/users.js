//Routes for creating users
const express = require('express');
const router = express.Router();

//User creation
//Recibe un request del tipo post a esta url /api/users
router.post('/', ( ) =>{
    console.log('Creating user...')
});

module.exports = router
