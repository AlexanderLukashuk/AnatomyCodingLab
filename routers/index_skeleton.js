const express = require("express");
const router = express.Router();
const path = require("path")

router
    .route("/index_skeleton")
    .get((req, res) => res.render(path.resolve("pages/index_skeleton.ejs")))
    .post((req, res) => res.render(path.resolve("pages/index_skeleton.ejs")));
module.exports = router;