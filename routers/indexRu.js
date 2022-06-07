const express = require("express");
const router = express.Router();
const path = require("path")

router
    .route("/index_ru")
    .get((req, res) => res.render(path.resolve("pages/index_ru.ejs")))
    .post((req, res) => res.render(path.resolve("pages/index_ru.ejs")));
module.exports = router;