const express = require('express');
const router = express.Router();
const Profile = require("../../db/Profile");
const passport = require("passport");

router.get("/test", (req, res) => {
    res.json({ msg: "works...." });
});

router.post("/get", passport.authenticate("jwt", { session: false }), (req, res) => {
    Profile.find()
        .then(profile => {
            if (!profile) {
                return res.status(404).json("Access Denied");
            }
            return res.json(profile);
        })
        .catch(err => {
            return res.status(404).json(err);
        });
});

router.post("/:id", passport.authenticate("jwt", { session: false }), (req, res) => {
    // param grad the data from frontend
    Profile.findById({_id:req.params.id})
            .then(profile =>{
                if(!profile){
                    return res.status(404).json("We don't have your data in our record");
                }
                return res.json(profile);
            })
            .catch(err =>{
                return res.status(404).json(err);
            });
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
    new Profile(profileField).save()
                .then(profile =>{
        res.json(profile);
    })
});


module.exports = router;
