# Admin-panel-for-Mentors
MERN stack admin panel

npm run dev --> To start both client and the server


# Mongoose Schema  
const mongoose = require('mongoose');

const MentorSchema = mongoose.Schema({
  fullName: String,
  age: String,
  currentProfile: String,
  company: String,
  email: String,
  phone: String,
  tasks: [taskSchema],
});
const taskSchema = mongoose.Schema({
  task: String,
});
module.exports = mongoose.model('Mentor', MentorSchema);
