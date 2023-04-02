const People = require('../models/people')


const getAllPeople = async (req, res) =>{
    try {
        const person = await People.find({})
        res.status(200).json({person, amount:person.length})
    } catch (error) {
        res.status(500).send({msg:error})
    }
}

const createPerson = async (req, res) =>{
    try {
        const person = await People.create(req.body)
        res.status(201).json({person})
    } catch (error) {
        res.status(500).send({msg:error})
    }
}

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



module.exports = {
    getAllPeople,createPerson,getPerson,deletePerson,updatePerson,getPersonByFirstName,getPeopleByGroup
}