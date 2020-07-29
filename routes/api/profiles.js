const express = require('express');
const router = express.Router();
const Profile = require("../../db/Profile");
const passport = require("passport");

router.get("/test", (req, res) => {
    res.json({ msg: "works...." });
});

router.post("/add",  passport.authenticate("jwt", { session: false }), (req, res) => {
    const profileField ={};
    if(req.body.type){
        profileField.type = req.body.type;
    }
    if (req.body.type) {
        profileField.describe = req.body.describe;
    }
    if (req.body.type) {
        profileField.income = req.body.income;
    }
    if (req.body.type) {
        profileField.expend = req.body.expend;
    }
    if (req.body.type) {
        profileField.cash = req.body.cash;
    }
    if (req.body.type) {
        profileField.remark = req.body.remark;
    }
    // send to db
    new Profile(profileField).save().then(profile =>{
        res.json(profile);
    })
});


module.exports = router;
