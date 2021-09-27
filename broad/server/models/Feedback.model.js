const { Schema, model } = require("mongoose");

const ratingSchema = new Schema({

  rating: {
    type: Number,
    min: 0,
    max: 10,
    required: true
  },

  comment: {
    type: String,
    maxlength: 200
  },

  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  receiver: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },

  type: {
    type: String,
    enum: ['QUOTE', 'USER'],
    required: true
  },

  date: {
    type: Date,
    required: true,
    default: Date.now
  }

}, { timestamps: true });

const Rating = model("Rating", ratingSchema);

module.exports = Rating;
