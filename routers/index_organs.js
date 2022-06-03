const express = require("express");
const router = express.Router();
const path = require("path")

router
    .route("/index_organs")
    .get((req, res) => res.render(path.resolve("pages/index_organs.ejs")))
    .post((req, res) => res.render(path.resolve("pages/index_organs.ejs")));
module.exports = router;