const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  startDate: {
    Type: Date,
    required: true
  },

  endDate: {
    Type: Date,
    required: true
  },

  receiver: {
    Type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  swappedBook: {
    Type: String
  }

},
  { timestamps: true }
);

const ExchangedBooks = model("ExchangedBooks", userSchema);

module.exports = ExchangedBooks;
