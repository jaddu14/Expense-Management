const mongoose = require('mongoose')
const Schema = mongoose.Schema

const adminSchema = new Schema({
    Username: {
        type: String
    },
    Password: {
        type: String
    },
    Clubname: {
        type: String
    }
}, {timestamps: true})

const Admin = mongoose.model('Admin', adminSchema)
module.exports = Admin
