const router = require('express').Router();
const Task = require('../../models/Task');
router.get('/', (req,res, next) => {
    const pageSize = 20;
    const currentPage = req.query.page > 0 ? req.query.page - 1 : 0; 
    Task.count().then(taskCount => {
        if(currentPage * pageSize > taskCount) {
            return res.status(400).json({});
        }
        Task.find()
        .limit(pageSize)
        .skip(currentPage * pageSize)
        .sort({
            createdAt: -1 // Most recent first
        })
        .then(tasks => {
            return res.status(200).json({
                content: tasks,
                page: req.query.page || 1,
                total: taskCount,
                pageSize
            });
        }).catch(err => {
            return res.status(500).json({msg: "No tasks Found"}); 
        })
    });
    
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