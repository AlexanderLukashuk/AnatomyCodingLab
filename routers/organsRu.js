const express = require("express");
const router = express.Router();
const path = require("path")

router
    .route("/organsRu")
    .get((req, res) => res.render(path.resolve("pages/organsRu.ejs")))
    .post((req, res) => res.render(path.resolve("pages/organsRu.ejs")));
module.exports = router;