
const connectDb =require("./db/connection");
connectDb();
const express = require("express");
const app = express();
const users = require("./routes/api/users");
const bodyParser = require("body-parser");
const passport = require("passport");
// const Profile = require("./db/Profile");
const profile = require("./routes/api/profiles");
// Body parser middleware, for http post header
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
require("./config/passport")(passport);

// Member API router
app.use('/api/users', users);
app.use('/api/profiles', profile);
// initialize passortjs


const PORT = process.env.PORT || 5000;



app.listen(PORT, () =>
    console.log(`Serve starts at Port ${PORT}`)
);