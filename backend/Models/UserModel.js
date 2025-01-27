const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  Tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Task", // Referencing the Task model correctly
  }]
});

module.exports = mongoose.model("User", userSchema); // Make sure "User" is capitalized
