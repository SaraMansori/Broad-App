const { Schema, model } = require("mongoose");

const messageSchema = new Schema({

  sentDate: {
    type: Date,
    required: true,
    default: Date.now()
  },

  text: {
    type: String,
    required: true,
    //match: regEx to avoid empty messages
  },

  hasBeenRead: {
    type: Boolean,
    required: true,
    default: false
  },

  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  }

}, { timestamps: true });

const Message = model("Message", messageSchema);

module.exports = Message;
