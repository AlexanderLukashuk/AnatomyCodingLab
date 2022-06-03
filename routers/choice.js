const express = require("express");
const router = express.Router();
const path = require("path")

router
    .route("/choice")
    .get((req, res) => res.render(path.resolve("pages/choice.ejs")))
    .post((req, res) => res.render(path.resolve("pages/choice.ejs")));
module.exports = router;