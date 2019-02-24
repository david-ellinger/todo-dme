const router = require('express').Router();
const User = require('../../models/User');
router.put('/:id', (req,res, next) => {
    User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}).then(updatedUser => {
        res.status(200).json(updatedUser);
    }).catch(err => {
        console.log(`Error Updating User: ${err}`);
        res.status(500).json({msg: `Failed to update User`});
    })
})

module.exports = router;