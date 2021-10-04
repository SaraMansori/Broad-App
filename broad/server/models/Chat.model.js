const { Schema, model } = require('mongoose');

const chatSchema = new Schema({

  participants: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }],

  messages: [{
    type: Schema.Types.ObjectId,
    ref: 'Message',
  }]

}, { timestamps: true });

const Chat = model('Chat', chatSchema);

module.exports = Chat;
