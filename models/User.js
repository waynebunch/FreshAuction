const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId
const passportLocalMongoose = require('passport-local-mongoose')
const mongodbErrorHandler = require('mongoose-mongodb-errors')
const validator = require('validator')

const UserSchema = new Schema({
    id: ObjectId,
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        // validate: [{
        //     isAsync: false,
        //     validator: validator.isEmail
        // }],
        required: 'Please supply an email address'
    },
    firstName: {
        type: String,
        required: 'Please enter your first name',
        trim: true
    },
    lastName: {
        type: String,
        required: 'Please enter your last name',
        trim: true
    }
    // address: {
    //     type: String,
    //     required: 'Please enter a valid address',
    //     trim: true
    // }
})

UserSchema.plugin(passportLocalMongoose, { usernameField: 'email' })
UserSchema.plugin(mongodbErrorHandler)

module.exports = mongoose.model('User', UserSchema)
