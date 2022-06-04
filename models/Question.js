const {Schema, model} = require('mongoose')

const Question = new Schema({
    question: {type: String, unique: true, required: true},
    answer1: {type: String, unique: true, required: true},
    answer2: {type: String, unique: true, required: true},
    answer3: {type: String, unique: true, required: true}
})

module.exports = model('Question', Question);


