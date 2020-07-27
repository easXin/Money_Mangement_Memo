const mongoose = require('mongoose');
// create user schema
const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        avatar:{
            type:String
        },
        date:{
            type:String,
            default:Date.now
        }

    }
);

module.exports = user = mongoose.model('user', userSchema);
