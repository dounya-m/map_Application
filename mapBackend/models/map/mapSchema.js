const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mapSchema = new Schema({
    lat:{
        type: String,
        require: [true, 'please enter the text']
    },
    lon:{
        type: String,
        require: [true, 'please enter the text']
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Map', mapSchema)
