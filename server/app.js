const connectDB = require('./db/connect')
const express = require('express')
const app = express()
const cors = require('cors');
require('dotenv').config()
const person = require('./routes/routes')

// middleware
app.use(express.static("./public"))
app.use(express.json())

// cors
app.use(cors());

// routes
app.use('/api/v1/', person)


// server
const port = process.env.PORT || 5000

// db connection
const start = async () =>{
    try{
        await connectDB(process.env.Mongo_URI)

        
    app.listen(port, ()=>{console.log(`Server is listening on ${port}...`)})
    }catch(err){
        console.log(err)
    }
}

// start server
start()
