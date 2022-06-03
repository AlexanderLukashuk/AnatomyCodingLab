const express = require("express");
const router = express.Router();
const path = require("path")

router
    .route("/organs")
    .get((req, res) => res.render(path.resolve("pages/organs.ejs")))
    .post((req, res) => res.render(path.resolve("pages/organs.ejs")));
module.exports = router;