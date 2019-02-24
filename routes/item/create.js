const router = require('express').Router();
const Item = require('../../models/Item');
const uuid = require('uuid/v4');

router.post('/', (req,res, next) => {
    if(!req.body) {
        return res.status(400).json({
            msg: "Missing required fields"
        });
    }
    const item = new Item({...req.body, _id: uuid()})
    item.save().then(savedItem => {
        return res.status(201).json(savedItem);
    }).catch((error) => {
        console.log(`Error saving Item: ${error}`);
        return res.status(500).json({msg: `Error saving item`})
    });
})

module.exports = router;