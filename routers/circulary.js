const express = require("express");
const router = express.Router();
const path = require("path")

router
    .route("/circuraly")
    .get((req, res) => res.render(path.resolve("pages/circuraly.ejs")))
    .post((req, res) => res.render(path.resolve("pages/circuraly.ejs")));
module.exports = router;