const { Schema, model} = require('mongoose');

const userSchima = new Schema({
    email: {type: String, required: true, unique: true},
    hasedPassword: {type: String, required: true}
});

userSchema.index({ email: 1}, {
    collation: {
        locale: 'en',
        strength: 2
    }
    });

const User = model('User, userSchima');

module.exports = User;
