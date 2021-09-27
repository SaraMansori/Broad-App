const { Schema, model } = require("mongoose");

const challengeSchema = new Schema({ 
  
  phrase: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 250,
    trim: true
  },
  number: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  year: {
    type: String,
    required: true
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
  
}, { timestamps: true });

const Challenge = model("Challenge", challengeSchema);

module.exports = Challenge;
