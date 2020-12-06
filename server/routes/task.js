const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController')
const { check } = require('express-validator')

//api/task
router.post('/',
[
  
    check("task", 'Please fill this input').not().isEmpty(),
    check("task", 'maximum 15 characters allowed').isLength({ max: 15}),
    
],
taskController.createTask
)

module.exports = router