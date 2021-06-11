const mongoose = require('mongoose')

const connectDB = async() =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useCreateIndex:true,
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false
        })
        console.log(`MongoDB is connected at ${conn.connection.host}`)
    } catch (error) {
        console.log('Error with connection'+ error)
    }
    

}

module.exports = connectDB