const mongoose = require('mongoose');

// Define the Task schema
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  dueDate: {
    type: String,
    required: true,
  },
  time: {
    type: String,  // Time in string format
    required: true,
  },
  priority: {
    type: String,
    enum: ['Low', 'Medium', 'High'],
    required: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'In Progress', 'Completed'],
    default: 'Pending',
  },
  maintain: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Make sure the reference is correct here
  },
}, {
  timestamps: true,  // Automatically adds createdAt and updatedAt fields
});

module.exports = mongoose.model('Task', taskSchema); // "Task" model name
