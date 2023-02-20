const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    name:{
        type: String,
        require: [true, 'Please enter your name']
    },
    email:{
        type: String,
        unique: true,
        require: [true, 'Please enter your name']
    },
    password:{
        type: String,
        require: [true, 'Please enter your name']
    }
},
    {
        timestamps:true
    }
)

module.exports = mongoose.model('User', userSchema)