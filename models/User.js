const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId
const passportLocalMongoose = require('passport-local-mongoose')

const UserSchema = new Schema({
    id: ObjectId,
    email: String,
    firstName: String,
    lastName: String,
    address: String
})

UserSchema.plugin(passportLocalMongoose, { usernameField: 'email' })

module.exports = mongoose.model('User', UserSchema)
