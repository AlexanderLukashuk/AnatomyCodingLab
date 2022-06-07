const express = require("express");
const router = express.Router();
const path = require("path")

router
    .route("/muscularRu")
    .get((req, res) => res.render(path.resolve("pages/muscularRu.ejs")))
    .post((req, res) => res.render(path.resolve("pages/muscularRu.ejs")));
module.exports = router;