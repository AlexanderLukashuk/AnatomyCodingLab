const express = require("express");
const router = express.Router();
const path = require("path")

router
    .route("/index_circuraly")
    .get((req, res) => res.render(path.resolve("pages/index_circuraly.ejs")))
    .post((req, res) => res.render(path.resolve("pages/index_circuraly.ejs")));
module.exports = router;