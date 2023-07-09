const People = require('../models/people')


// gets all people
const getAllPeople = async (req, res) =>{
    try {
        const person = await People.find({})
        res.status(200).json({person, amount:person.length})
    } catch (error) {
        res.status(500).send({msg:error})
    }
}

// creates a person
const createPerson = async (req, res) =>{
    try {
        const person = await People.create(req.body)
        res.status(201).json({person})
    } catch (error) {
        res.status(500).send({msg:error})
    }
}

// get person by first name
const getPersonByFirstName = async(req, res) =>{
    try {
        
        const {firstName:personID} = req.params
        const person = await People.findOne({firstName:personID})

        if(!person){
            res.status(400).send({msg: 'no people found'})
            return
        }
        res.status(200).json({person})
    } catch (error) {
        res.status(500).send({msg:error})
    }
}

// get people by group number
const getPeopleByGroup = async(req, res) =>{
    try {
        const {groupNumber} = req.params; // Corrected destructuring
        const person = await People.find({groupNumber: groupNumber});

        if(person.length === 0){
            res.status(400).send({msg: 'no people found'});
            return;
        }
        res.status(200).json({person});
    } catch (error) {
        res.status(500).send({msg:error});
    }
}

// get person by id
const getPerson = async (req, res) =>{
    try {
        const {id:personID} = req.params
        const person = await People.findOne(({_id:personID}))

        if(!person){
            res.status(400).send({msg: 'no tasks found'})
            return
        }
        res.status(200).json({person})
    } catch (error) {
        res.status(500).send({msg:error})
    }
}

// delete person by id
const deletePerson = async (req,res)=>{
    try {
        const {id:personID} = req.params
        const person = await People.deleteOne({_id:personID})

        if(!person){
            res.status(400).send({msg:'No person found'})
        }else{
            res.status(200).json({person})
        }

    } catch (error) {
        res.status(500).send({msg:error})
    }
}

// update person by id
const updatePerson = async (req, res) => {
    try {
        const { id: personID } = req.params;
        const person = await People.findByIdAndUpdate(
            personID,
            { $set: req.body },
            { new: true, runValidators: true }
        );

        if (!person) {
            res.status(400).send({ msg: 'no tasks found' });
            return;
        }

        res.status(200).json({ id: person, data: req.body });
    } catch (error) {
        res.status(500).send({ msg: error });
    }
};

const getFullNameGroupNumber = async (req, res) => {
    try {
        const { firstName, lastName } = req.params;
        const person = await People.findOne({ firstName, lastName });

        if (!person) {
            res.status(400).send({ msg: 'No person found' });
            return;
        }

        const groupNumber = person.groupNumber;
        const peopleInSameGroup = await People.find({ groupNumber });

        if (!peopleInSameGroup.length) {
            res.status(400).send({ msg: 'No people found in the same group' });
            return;
        }

        res.status(200).json({ people: peopleInSameGroup });
    } catch (error) {
        res.status(500).send({ msg: error });
    }
};



module.exports = {
    getAllPeople,createPerson,getPerson,deletePerson,updatePerson,getPersonByFirstName,getPeopleByGroup, getFullNameGroupNumber
}