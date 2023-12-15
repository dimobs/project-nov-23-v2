const { Schema, model, Types: {ObjectId} } = require('mongoose');
const { comparePassword, hashPassword } = require('../services/util');

const userSchema = new Schema({
    city: { type: String, required: false, minlength: 2, unique: false },
    country: { type: String, required: false },
    email: {type: String, required: true},
    firstName: {type: String, required: false},
    lastName: {type: String},
    phoneNumber: {type: String},
    street: {type: String},
    streetNumber: {type: String},
    imageUrl: {type: String},

    // hashedPassword: { type: String, required: true },
    // gender: { type: String, required: false, enum: ['male','female']},
    // pays: {type: [ObjectId], ref: 'Pay', default: []},
    // trips: {type: [ObjectId], ref: 'Trip', default: []}
});


const UserDetails = model('UserDetails', userSchema);

module.exports = UserDetails;