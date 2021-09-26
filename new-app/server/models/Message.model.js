const { Schema, model } = require("mongoose");

const messageSchema = new Schema({
  sentDate: {
    Type: Date,
    required: true
  },

  text: {
    Type: String,
    required: true,
    //match: regEx to avoid empty messages
  },

  hasBeenRead: {
    Type: Boolean,
    required: true,
    default: false
  },

  owner: {
    Type: Schema.Types.ObjectId,
    ref: 'User',
  }
},
  { timestamps: true }
);

const Message = model("Message", messageSchema);

module.exports = Message;
