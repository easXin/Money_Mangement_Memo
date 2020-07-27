const express = require("express");
const app = express();




// specify router to connect to port 500
app.get('/',(req,res) =>{
    res.send("Hello World!!");
});

const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})