const Task = require('../models/TaskModel')
const { validationResult } = require('express-validator')


exports.createTask = async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty() ){
        return res.status(400).json({ errors: errors.array()})
    }

    try {
        const task = new Task(req.body);
        task.author = req.user.id
        
        task.save();
        res.json(task);

    } catch (error) {
        console.log(error)
        res.status(500).send('There was an error')
    }
}