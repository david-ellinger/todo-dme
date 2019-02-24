const router = require('express').Router();
const User = require('../../models/User')
const uuid = require('uuid');
router.post('/', (req,res, next) => {
    if(!req.body) {
        return res.status(400).json({
            msg: "Missing required fields"
        });
    }
    const user = new User({
        _id: uuid(),
        username: req.body.username,
    })
    user.save().then(savedUser => {
        return res.status(201).json(savedUser);
    }).catch((error) => {
        console.log(`Error saving User: ${error}`);
        return res.status(500).json({msg: `Error saving user`})
    });
})

module.exports = router;