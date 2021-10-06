const { Schema, model } = require("mongoose")

const quoteRatingSchema = new Schema({
  rating: {
    type: Number,
    min: 0,
    max: 10
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true })

const QuoteRating = model("QuoteRating", quoteRatingSchema)

module.exports = QuoteRating
