const router = require('express').Router();
const Task = require('../../models/Task');
router.delete('/:id', (req,res,next) => {
    Task.findByIdAndDelete(req.params.id).then(result =>{
        console.log(`Delete Result: ${result}`);
        return res.status(204).json();
    }).catch(err => {
        console.log(`Error deleting task: ${err}`);
        return res.status(500).json({msg: `Error deleting task`});
    });
});

module.exports = router;