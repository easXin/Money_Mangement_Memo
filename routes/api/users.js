// @login & register
const express = require('express');
// use express' router
const router = express.Router();
const user = require("../../db/user");


router.get("/test", (req, res) => {
    res.json({msg:"Hi"});
});

module.exports = router;



// anything starts with get is rounter 