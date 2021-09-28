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
    //required: true,
  },

  name: {
    type: String,
    required: true,
    maxlength: 16,
    trim: true,
    default: 'unknown'
  },

  description: {
    type: String,
    maxlength: 250,
    trim: true,
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

  locationInfo: {
    city: String,
    country: String,
    address: String
  },

  favoriteGenres: [String],

  books: [{

    id: {
      type: String,
      required: true
    },

    status: {
      type: String,
      enum: ['WANTSTOREAD', 'READING', 'READ'],
      required: true
    },

    startDate: Date,

    finishDate: Date,

    wantsToExchange: Boolean,

  }],

  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],

  savedQuotes: [{
    type: Schema.Types.ObjectId,
    ref: 'Quote'
  }]

}, { timestamps: true });


const User = model("User", userSchema);

module.exports = User;
