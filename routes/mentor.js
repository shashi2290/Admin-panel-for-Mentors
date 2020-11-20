const express = require('express');
const router = express.Router();

//Importing mongoose Schema for Resume from dataModel folder
const Mentor = require('../mentorModel');

//Get all resumes that are posted
router.get('/', async (req, res) => {
  try {
    const mentors = await Mentor.find();
    res.json(mentors);
  } catch (err) {
    res.json({ message: err });
  }
});

//Submit a resume
router.post('/', async (req, res) => {
  const mentor = new Mentor({
    fullName: req.body.fullName,
    age: req.body.age,
    currentProfile: req.body.currentProfile,
    company: req.body.company,
    email: req.body.email,
    phone: req.body.phone,
    tasks: req.body.tasks,
  });

  try {
    const savedMentor = await mentor.save();
    res.json(savedMentor);
  } catch (err) {
    res.json({ message: err });
  }
});

// //Get specific resume by email
// router.get('/:email', async (req, res) => {
//   try {
//     const resume = await Resume.find({ email: req.params.email });
//     res.json(resume);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

//Delete a resume by email
router.delete('/:id', async (req, res) => {
  try {
    const deletedMentor = await Mentor.remove({ _id: req.params.id });
    res.json(deletedMentor);
  } catch (err) {
    res.json({ message: err });
  }
});

//Update a document
router.put('/:id', async (req, res) => {
  try {
    const updatedMentor = await Mentor.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      function (err, resp) {}
    );
    res.json(updatedMentor);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
