const { Schema, model } = require("mongoose")

const userSchema = new Schema({
  
  startDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  
  endDate:  Date,

  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  receiver: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  id: {
    type: String,
    required: true
  },

  swappedBookId: String

}, { timestamps: true })

const ExchangedBook = model("ExchangedBook", userSchema)

module.exports = ExchangedBook
