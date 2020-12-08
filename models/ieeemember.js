const mongoose = require('mongoose')
const { StringDecoder } = require('string_decoder')
const Schema = mongoose.Schema

const memberSchema = new Schema({
    Name: {
        type: String
    },
    Sic:{
        type:Number
    },
    Branch:{
        type:String
    },
    Contact:{
        type: String
    }
},{timestamps: true})

const ieeemember = mongoose.model('ieeemember',memberSchema)
module.exports = ieeemember

