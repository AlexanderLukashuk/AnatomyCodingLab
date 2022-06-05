const User = require('../models/User')
const Role = require('../models/Role')
const Question = require('../models/Question')
const bcrypt = require('bcrypt')
const {validationResult, body} = require('express-validator')
const jwt = require('jsonwebtoken')
const {secret} = require('../Xconfig')
const bodyParser = require("body-parser");

// function generateAccessToken(id, roles){
//     const payload = {
//         id,
//         roles
//     }
//     return jwt.sign(payload, secret, {expiresIn: "18h"}, ()=>console.log("Generated!"))
// }

class authCtrl{
    async registration(req, res) {
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.status(400).json({message: "Some ERROR OCCURRED! Try again!"}, errors)
            }

            const username = req.body.username;
            const email = req.body.email;
            const password = req.body.password

            const candidate = await User.findOne({username})
            if(candidate){
                return res.status(400).json({message: "User with such name already exists!"})
            }

            const hashedPassword = bcrypt.hashSync(password, 6);
            const userRole = await Role.findOne({value: 'USER'});
            const user = new User({username, email, password: hashedPassword, roles: [userRole.value]});
            await user.save();
            return res.json({message: "User has been successfully registered!"})

        }  catch (e) {
            console.log(e)
            res.status(400).json({message: "Registration failed"})
        }
    }

    async createQuestion(req, res) {
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.status(400).json({message: "Some ERROR OCCURRED! Try again!"}, errors)
            }

            const question = req.body.question;
            const answer1 = req.body.answer1;
            const answer2 = req.body.answer2;
            const answer3 = req.body.answer3;


            const candidate = await Question.findOne({question})
            if(candidate){
                return res.status(400).json({message: "User with such name already exists!"})
            }

            // const hashedPassword = bcrypt.hashSync(password, 6);
            // const userRole = await Role.findOne({value: 'USER'});
            const test = new Question({question, answer1, answer2, answer3});
            await test.save();
            return res.json({message: "User has been successfully registered!"})

        }  catch (e) {
            console.log(e)
            res.status(400).json({message: "Registration failed"})
        }
    }

    async getTests(req, res) {
        try {
            const questions = await Question.find();
            res.send(questions);
        } catch (e) {
            console.log(e);
        }
    }

    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.send(users);
        }  catch (e) {
            console.log(e)
        }
    }

    async getQuestionById(req, res) {
        try {
            const questionData = req.body.questionData;
            const title = 'Question';
            // const question = await Question.findById(req.params.id);
            const question = await Question.findOne(req.body.questionData);

            console.log(question);
            res.send(question);
        } catch (e) {
            console.log(e);
        }

    }



    async update(req, res){
        try {

            const user = await User.updateOne({username: req.body.selectUser},{username: req.body.newData});

            if (user){
                res.json({message:"User has been successfully updated!"})
            } else {
                res.status(400).json({message: "Updating failed!"})
            }
        }  catch (e) {
            console.log(e)
        }
    }

    async delete(req, res){
        try {
            const username = req.body.userData;

            const found = await User.findOne({username})

            console.log(found);

            if (!found){
                return res.status(400).json({message: username + " was not found!"})
            }
            let deletedUser = await User.findOneAndDelete( {username})
            if (!deletedUser){
                return res.status(400).json({message: "This user cannot be deleted by some reason!"})
            } else res.json({message: username +" was deleted!"})
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new authCtrl();