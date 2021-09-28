const { Schema, model } = require("mongoose");

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

  exchangedBookId: String,

  swappedBookId: String

}, { timestamps: true });

const ExchangedBooks = model("ExchangedBooks", userSchema);

module.exports = ExchangedBooks;
