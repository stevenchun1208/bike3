const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt-as-promised');
const validator = require('validator');
const mongoose = require('mongoose');
const { Schema } = mongoose;
// const Bike = require('mongoose').model('Bike');

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator(value) {
        return validator.isEmail(value);
      }
    },
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  bikes: [{type: Schema.Types.ObjectId, ref: 'Bike'}]
}, {
  timestamps: true
});

userSchema.plugin(uniqueValidator, { message: '{PATH} must be unique' });

userSchema.statics.validatePassword = function(candidatePassword, hashedPassword) {
  return bcrypt.compare(candidatePassword, hashedPassword);
};

userSchema.pre('save', function(next) {
  if (!this.isModified('password')) { return next(); }

  const self = this;

  bcrypt.hash(this.password, 10)
    .then(function(hashedPassword) {
      self.password = hashedPassword;

      next();
    })
    .catch(next);
});

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
  },
  price: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Bike', bikeSchema);
module.exports = mongoose.model('User', userSchema);
