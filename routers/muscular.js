const express = require("express");
const router = express.Router();
const path = require("path")

router
    .route("/muscular")
    .get((req, res) => res.render(path.resolve("pages/muscular.ejs")))
    .post((req, res) => res.render(path.resolve("pages/muscular.ejs")));
module.exports = router;