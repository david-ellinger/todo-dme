const router = require('express').Router();
const Task = require('../../models/Task');
router.put('/:id', (req,res, next) => {
    Task.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}).then(updatedTask => {
        res.status(200).json(updatedTask);
    }).catch(err => {
        console.log(`Error Updating Task: ${err}`);
        res.status(500).json({msg: `Failed to update Task`});
    })
})
module.exports = router;