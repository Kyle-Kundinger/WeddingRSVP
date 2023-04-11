const express = require('express')
const { model } = require('mongoose')
const router = express.Router()
const People = require('../models/people')

const {getAllPeople,createPerson,getPerson,deletePerson,updatePerson, getPersonByFirstName, getPeopleByGroup} = require('../controllers/controllers')
const sendEmail = require('../controllers/nodemailer')

router.route('/').get(getAllPeople).post(createPerson)
router.route('/:id').get(getPerson).patch(updatePerson).delete(deletePerson)
router.route('/:firstName').get(getPersonByFirstName)

router.route('/group/:groupNumber').get(getPeopleByGroup)

router.post('/send-email', async (req, res) => {
    try {
      const { email } = req.body;
      const {people} = req.body;
      console.log(people);

      await sendEmail({
        email,
        subject: 'Thank you for RSVPing!',
        message: 'Thank you for RSVPing to our event!',
        people: people
      });
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email', error: error.stack }); // Send error stack trace to client
    }
  });

  

module.exports = router