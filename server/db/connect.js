const e = require('express')
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

const connectdb = (url) =>{
    return mongoose.connect(url, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
}


module.exports = connectdb