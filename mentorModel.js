const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  task: String,
});

const MentorSchema = mongoose.Schema({
  fullName: String,
  age: String,
  currentProfile: String,
  company: String,
  email: String,
  phone: String,
  tasks: [taskSchema],
});

module.exports = mongoose.model('Mentor', MentorSchema);
