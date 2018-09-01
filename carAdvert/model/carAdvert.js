'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarAdvertSchema = new Schema({
  title: {
    type: String,
    required: 'Title for car is required'
  },
  fuel: {
    type: String,
    enum: ['diesel', 'gasoline'],
    required: 'Fuel for car is required'
  },
  price: {
    type: Number,
    required: 'Price for car is required'
  },
  new: {
      type: Boolean,
      required: 'Condition for car is required'
  },
  mileage: Number,
  firstRegistration: Date
});

module.exports = mongoose.model('CarAdvert', CarAdvertSchema);