const express = require("express");
const router = express.Router();
const path = require("path")
const accessMid = require('../../middleware/access.js')
const passport = require("passport");
const {cookie} = require("express-validator");
const {request} = require("express");

router
    .route("/organs_accessed")
    .get(accessMid, (req, res) => res.render(path.resolve("pages/accessed/organs.ejs")))
    .post(accessMid, (req, res) => res.render(path.resolve("pages/accessed/organs.ejs")));
module.exports = router;