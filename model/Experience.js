const mongoose = require('mongoose')

const experienceSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,

        },
        story:{
            type:String,
            required:true

        },
        selected:{
            type:String,
            required:false
        },
        createdAt:{
            type:Date,
            default:Date.now
        }

})

module.exports = mongoose.model('Experience',experienceSchema)