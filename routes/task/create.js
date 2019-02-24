const router = require('express').Router();
const Task = require('../../models/Task');
const uuid = require('uuid/v4');

router.post('/', (req,res, next) => {
    if(!req.body) {
        return res.status(400).json({
            msg: "Missing required fields"
        });
    }
    const task = new Task({...req.body, _id: uuid()})
    task.save().then(savedItem => {
        return res.status(201).json(savedItem);
    }).catch((error) => {
        console.log(`Error saving task: ${error}`);
        return res.status(500).json({msg: `Error saving task`});
    });
})

module.exports = router;