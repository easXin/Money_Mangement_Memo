// @login & register
const express = require('express');
// use express' router
const router = express.Router();
// Mongo schema
const User = require("../../db/User");
// use this lib to encrypt passcode
const bcrypt = require("bcrypt");
// for user profile avatar
const gravatar = require("gravatar");
// define router
router.get("/test", (req, res) => {
    res.json({msg:"login works"});
});

// use x-www-form-urlencoded to view the data in the postman
router.post("/register",(req,res) => {
    //console.log(req.body);
    //res.json({msg:req.body});
    User.findOne({email:req.body.email})
        .then((user) => {
            if(user){
                return res.status(400).json({email:"This email has been taken"})
            }else{
                // 1st arg: target  => s: size , r: format, d : default {404 ; err, mm: default profile img}
                let avatar = gravatar.url(req.body.email,{s:'200',r:'pg',d:'mm'});
                // create new user
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    avatar,
                });
                bcrypt.genSalt(10, (err, salt) => {
                    // 1st arg: target, 2nd arg: encrypt alg
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err)
                            throw err;
                        newUser.password = hash;
                        newUser.save()
                                .then(user =>
                                        res.json(user))
                                .catch(err =>
                                        console.log(err)
                                );
                    });
                });
            }
        });
});
module.exports = router;



// anything starts with get is rounter 