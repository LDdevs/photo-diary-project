const mongoose = require('mongoose');
const entrySchema = new mongoose.Schema({
  title: String,
  content: String,
  photo: String,
  location: String,
  date: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Entry', entrySchema);
