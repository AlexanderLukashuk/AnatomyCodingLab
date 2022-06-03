const express = require("express");
const router = express.Router();
const path = require("path")

router
    .route("/skeleton")
    .get((req, res) => res.render(path.resolve("pages/skeleton.ejs")))
    .post((req, res) => res.render(path.resolve("pages/skeleton.ejs")));
module.exports = router;