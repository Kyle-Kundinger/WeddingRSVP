const connectDB = require('./db/connect')
const express = require('express')
const app = express()
const cors = require('cors');
require('dotenv').config()
const person = require('./routes/routes')

app.use(express.static("./public"))
app.use(express.json())


app.use(cors());
app.use('/api/v1/', person)



const port = 3000

const start = async () =>{
    try{
        await connectDB(process.env.Mongo_URI)

        
    app.listen(port, ()=>{console.log(`Server is listening on ${port}...`)})
    }catch(err){
        console.log(err)
    }
}

start()
