const router = require('express').Router();
const User = require('../../models/User');



router.get('/', (req,res, next) => {
    User.find().then(users => {
        return res.status(200).json(users);
    }).catch(err => {
        return res.status(500);
    });
});

router.get('/:id', (req,res, next) => {
    User.findOne({_id: req.params.id}).then(user => {
        return res.status(200).json(user);
    }).catch(err => {
        console.log('No User Found');
        return res.status(500).json({msg: "No User Found"});
    });
});

module.exports = router;