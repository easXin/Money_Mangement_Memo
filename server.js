
const connectDb =require("./db/connection");
connectDb();
const express = require('express');
const path = require('path');
const app = express();
const users = require("./routes/api/users");
// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Member API router
// original  ..... > new
app.use('/api/users', users);
// paragraph, request the file that just created 
const PORT = process.env.PORT || 5000;



app.listen(PORT, () =>
    console.log(`Serve starts at Port ${PORT}`)
);