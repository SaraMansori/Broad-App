const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    //required: true,
    //check regEx to check if email format
    trim: true,
    default: 'unknown'
  },

  name: {
    type: String,
    //required: true,
    maxlength: 16,
    trim: true,
    default: 'unknown'
  },

  username: {
    type: String,
    unique: true,
    //required: true,
    maxlength: 16,
    trim: true,
    default: 'unknown'
  },

  password: {
    type: String,
    //required: true,
  },

  role: {
    type: String,
    enum: ['USER', 'MOD', 'ADMIN', 'AUTHOR'],
    default: 'USER',
    required: true
  },

  location: {
    type: {
      type: String
    },
    coordinates: [Number]
    //probar mapbox y googlemaps geometry
  },

  city: {
    type: String
  },

  country: {
    type: String
  },

  favoriteGenres: {
    type: [String],
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

    lent: [{
      type: Schema.Types.ObjectId,
      ref: 'ExchangedBooks',
    }],

    borrowed: [{
      type: Schema.Types.ObjectId,
      ref: 'ExchangedBooks',
    }],

    previouslyExchanged: [{
      type: Schema.Types.ObjectId,
      ref: 'ExchangedBooks',
    }],
  },

  pendingRequests: [{
    chat: {
      type: Schema.Types.ObjectId,
      ref: 'Request'
    },

  }],

  feedback: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],

  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],

  chats: [{
    type: Schema.Types.ObjectId,
    ref: 'Chat',
  }],

  favoriteQuotes: [{
    type: Schema.Types.ObjectId,
    ref: 'Quote'
  }]
},

  { timestamps: true }
);

const User = model("User", userSchema);
module.exports = User;