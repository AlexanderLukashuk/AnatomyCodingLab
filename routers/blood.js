const express = require("express");
const router = express.Router();
const path = require("path")

router
    .route("/blood")
    .get((req, res) => res.render(path.resolve("pages/blood.ejs")))
    .post((req, res) => res.render(path.resolve("pages/blood.ejs")));
module.exports = router;