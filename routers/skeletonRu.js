const express = require("express");
const router = express.Router();
const path = require("path")

router
    .route("/skeleton_ru")
    .get((req, res) => res.render(path.resolve("pages/skeleton_ru.ejs")))
    .post((req, res) => res.render(path.resolve("pages/skeleton_ru.ejs")));
module.exports = router;