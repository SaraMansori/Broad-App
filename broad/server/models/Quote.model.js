const { Schema, model } = require("mongoose");

const quoteSchema = new Schema({
  
  phrase: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 250,
    trim: true
  },

  author: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 30,
    trim: true
  },

  book: {
    type: String,
    minlength: 1,
    maxlength: 100,
    trim: true
  },

  status: {
    type: String,
    enum: ['PENDING', 'ACCEPTED', 'REJECTED'],
    default: 'PENDING',
    required: true
  },

  rating: [{
    type: Schema.Types.ObjectId,
    ref: 'Rating',
    required: true
  }],

  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }

}, { timestamps: true });

const Quote = model("Quote", quoteSchema);

module.exports = Quote;
