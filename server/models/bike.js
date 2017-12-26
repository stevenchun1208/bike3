const mongoose = require('mongoose');
const { Schema } = mongoose;
// const User = require('mongoose').model('User');


const bikeSchema = new Schema({
  _user:[{type: Schema.Types.ObjectId, ref: 'User'}],
  title: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Bike', bikeSchema);
