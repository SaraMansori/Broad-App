const { Schema, model } = require("mongoose");

const feedbackSchema = new Schema({

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

  date: {
    type: Date,
    required: true,
    default: Date.now()
  }

},
  { timestamps: true }
);

const Feedback = model("Feedback", feedbackSchema);

module.exports = Feedback;
