const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const cors = require('cors')


const connectDB = require('./config/db')

dotenv.config({path:'./config/config.env'})

connectDB()

const router = require('./routes/api/experience');
const app= express();



app.use(express.json());
app.use(cors())

app.use('/api/',router)

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`server started on port:${PORT}`)
})


