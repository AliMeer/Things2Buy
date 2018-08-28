const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    default: 1
  },
  listName: {
    type: String,
    default: "My List"
  },
  urgency: {
    type: String,
    default: "Normal"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Item = mongoose.model('item', ItemSchema);
