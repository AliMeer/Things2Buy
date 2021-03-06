const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
  Item.find()
    .sort({ listName: -1 })
    .then(items => res.json(items));
});

// @route   POST api/items
// @desc    Create An Item
// @access  Public
router.post('/', (req, res) => {
    var name= req.body.name;
    var listName = req.body.listName;
    var quantity = req.body.quantity
    var urgency = req.body.urgency;
    if (listName =='' || listName == null) listName="Zoya's Art & Craft";
    if (quantity =='' || quantity == null) quantity="1";
    if (urgency =='' || urgency == null) urgency="Normal";
    
    

  const newItem = new Item({
    name,
    listName,
    quantity,
    urgency
  });

  newItem.save().then(item => res.json(item));
});

// @route   DELETE api/items/:id
// @desc    Delete A Item
// @access  Public
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
