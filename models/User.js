const {Schema, model} = require('mongoose')

const User = new Schema({
    username: {type: String, unique: true, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, unique: true, required: true},
    googleId: {type: String}
})

module.exports = model('User', User);


