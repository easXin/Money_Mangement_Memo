
const connectDb =require("./db/connection");
connectDb();
const express = require("express");
const app = express();
const users = require("./routes/api/users");
const bodyParser = require("body-parser")

// Body parser middleware, for http post header
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Member API router
app.use('/api/users', users);

const PORT = process.env.PORT || 5000;



app.listen(PORT, () =>
    console.log(`Serve starts at Port ${PORT}`)
);