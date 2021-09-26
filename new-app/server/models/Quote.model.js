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
  hasBeenAccepted: {
    type: Boolean,
    default: false,
    required: true
  },
  hasBeenRejected: {
    type: Boolean,
    default: false,
    required: true
  },
  rating: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
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
