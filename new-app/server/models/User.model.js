const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    //check regEx to check if email format
    trim: true,
    default: 'unknown'
  },

  name: {
    type: String,
    required: true,
    maxlength: 16,
    trim: true,
    default: 'unknown'
  },

  username: {
    type: String,
    unique: true,
    required: true,
    maxlength: 16,
    trim: true,
    default: 'unknown'
  },

  password: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    enum: ['USER', 'MOD', 'ADMIN', 'AUTHOR'],
    default: 'USER',
    required: true
  },

  location: {
    //probar mapbox y googlemaps geometry
  },

  books: {

    wantsToRead: [{
      type: 'String'
    }],

    isReading: [{
      type: 'String',
      startDate: {
        type: Date
      },
    }],

    hasRead: [{
      type: 'String',
      startDate: {
        type: Date
      },
      finishDate: {
        type: Date
      },
    }],

    wantsToGive: [{
      type: 'String'
    }],

  },

  feedback: [{
    stars: {
      type: Number
    },
    comment: {
      type: String
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  }]

},
  { timestamps: true }
);

const User = model("User", userSchema);

module.exports = User;
