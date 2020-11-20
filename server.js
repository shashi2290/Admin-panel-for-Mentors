const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
//Import Routes
const mentorRoute = require('./routes/mentor');
//Refer to routes folder for all /resume POST and DELETE sections
app.use('/mentor', mentorRoute);

// Routes
app.get('/', (req, res) => {
  res.send('This is home. Go to /mentor for all mentors');
});

//Connect to DB
mongoose.connect(
  'mongodb://localhost:27017/mentorDB',
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('Connected to local MongoDB server');
  }
);

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
