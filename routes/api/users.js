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
// user token
const jwt = require("jsonwebtoken");
const secret_k = require("../../config/keys");
const passport = require("passport");
// define router
// GET api/users/login
router.get("/test", (req, res) => {
    res.json({msg:"login works"});
});

// use x-www-form-urlencoded to view the data in the postman
// POST api/users/login
router.post("/register",(req,res) => {
    //console.log(req.body);
    //res.json({msg:req.body});
    User.findOne({email:req.body.email})
        .then((user) => {
            if(user){
                return res.status(400)
                            .json({email:"This email has been taken"});
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
                        if(err){
                            throw err;
                        }
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

// POST api/users/login
// returns returns jwt token
// desc : take user's email and password, do the comparision in the backend, if the data is matched, login successful
router.post("/login",(req,res) =>
{
    const email = req.body.email;
    const password = req.body.password;
    // query DB data
    User.findOne({ email: req.body.email }).then((user) => {
      // if email is not found
        if (!user) {
            return res.status(404).json({ email: "Email is not found" });
        }
      // decrypt password
        bcrypt.compare(password, user.password).then((isMatch) =>
        {
            if (isMatch) {
                const rule = {
                        id:user.id,
                        name:user.name,
                    };
                // desc: getting user token
                // rule, encrpt name, expire date, err,result
                jwt.sign(rule, secret_k.secretKey,{expiresIn:3600},(err,token) => {
                        if(err){
                            return res.status(404)
                                        .json({token:"User credential failed"})
                        }else{
                            res.json({
                                success:true,
                                token:"Bearer "+token
                            });
                        }
                    });
            } else {
                return res.status(400)
                            .json({ password: "Wrong password" });
            }
        });
    });
});

// GET api/users/current  2nd arg: validate token
// returns current user info
router.get("/current",passport.authenticate("jwt",{session:false}),(req,res) =>{
    res.json({
        id:req.user.id,
        name:req.user.name,
        email:req.user.email
    });
});
module.exports = router;
