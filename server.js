const express = require("express");
const connectDb =require("./DB/connection")
const app = express();
connectDb();

// specify router to connect to port 500
app.use('/api/userModel',require('./Api/user'));

const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})