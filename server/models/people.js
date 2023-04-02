const mongoose = require('mongoose')

const p_task = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true
    },
    groupNumber:{
        type:String,
        require:true
    },
    foodChoice:{
        type:String,
        require:true
    },
    attending:{
        type:Boolean,
        require:true
    },
    completed:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('Person', p_task)