const express = require("express");
const router = express.Router();
const path = require("path")
const accessMid = require('../../middleware/access.js')
const passport = require("passport");
const {cookie} = require("express-validator");
const {request} = require("express");

router
    .route("/blood_accessed")
    .get(accessMid, (req, res) => res.render(path.resolve("pages/accessed/blood.ejs")))
    .post(accessMid, (req, res) => res.render(path.resolve("pages/accessed/blood.ejs")));
module.exports = router;