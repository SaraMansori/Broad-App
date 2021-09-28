const { Schema, model } = require("mongoose");

const requestSchema = new Schema({

  owner: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },

  receiver: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },

  status: {
    type: String,
    enum: ['PENDING', 'ACCEPTED', 'REJECTED'],
    default: 'PENDING',
    required: true
  },

  type: {
    type: String,
    enum: ['FRIENDSHIP', 'CHAT', 'EXCHANGE'],
    required: true
  }

}, { timestamps: true })

const Request = model("Request", requestSchema);

module.exports = Request;
