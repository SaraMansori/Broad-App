const { Schema, model } = require("mongoose");

const requestSchema = new Schema({

  owner: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
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

  type: {
    type: String,
    enum: ['FRIENDSHIP', 'CHAT'],
    required: true
  }
},
  { timestamps: true }
)

const Request = model("Request", requestSchema);
module.exports = Request;