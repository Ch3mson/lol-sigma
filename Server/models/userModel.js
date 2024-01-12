const mongoose = require('mongoose');

// Define schemas for the nested objects first
const opponentSchema = new mongoose.Schema({
  champion: {
    type: String,
    required: [true, 'Champion is required']
  },
  result: {
    type: Boolean,
    required: [true, 'Result is required']
  }
});

const gameSchema = new mongoose.Schema({
  gameID: {
    type: String,
    required: [true, 'Game ID is required']
  },
  opponents: [opponentSchema]
});

const championSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Champion name is required']
  },
  games: [gameSchema]
});

// User schema which includes the above schemas as nested documents
const userSchema = new mongoose.Schema({
  user: {
    type: String,
    required: [true, 'User is required'],
    unique: true, // if the username is supposed to be unique
    trim: true // if you want to remove padding spaces around the username
  },
  champions: [championSchema]
});

const User = mongoose.model('User', userSchema);

module.exports = User; // Export the model, not the schema