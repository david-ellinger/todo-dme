const router = require('express').Router();
const Task = require('../../models/Task');
router.get('/', (req,res, next) => {
    Task.find().then(tasks => {
        return res.status(200).json(tasks);
    }).catch(err => {
        return res.status(500).json({msg: "No tasks Found"}); 
    })
});

router.get('/:id', (req,res, next) => {
    Task.findOne({_id: req.params.id}).then(task => {
        return res.status(200).json(task);
    }).catch(err => {
        console.log('No task Found');
        return res.status(500).json({msg: "No task Found"});
    });
});

module.exports = router;