const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const UserSchema = new Schema({
    id: ObjectId,
    username: String,
    firstName: String,
    lastName: String,
    address: String
})

module.exports = mongoose.model('User', UserSchema)
