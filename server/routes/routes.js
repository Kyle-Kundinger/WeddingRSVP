const express = require('express')
const { model } = require('mongoose')
const router = express.Router()
const People = require('../models/people')

const {getAllPeople,createPerson,getPerson,deletePerson,updatePerson, getPersonByFirstName, getPeopleByGroup} = require('../controllers/controllers')

router.route('/').get(getAllPeople).post(createPerson)
router.route('/:id').get(getPerson).patch(updatePerson).delete(deletePerson)
router.route('/:firstName').get(getPersonByFirstName)

router.route('/group/:groupNumber').get(getPeopleByGroup)




  

module.exports = router