const express = require("express");
const router = express.Router();
const path = require("path")

router
    .route("/faq")
    .get((req, res) => res.render(path.resolve("pages/faq.ejs")))
    .post((req, res) => res.render(path.resolve("pages/faq.ejs")));
module.exports = router;