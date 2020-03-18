const express = require('express');
var router = express.Router();

router.get("/", (req, res) => {
    res.send("Sample router home page");
});

router.get("/about", (req, res) => {
    res.send("Sample router About page");
});


router.get("/user/:userId", (req, res) => {
    res.send(`Sample router user page user ${req.params.userId}`);
});

module.exports = router;