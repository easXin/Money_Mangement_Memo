const mongoose = require('mongoose');
const URI = "mongodb+srv://Dengxin:2328ERIC2788wang@cluster0.j3kqy.mongodb.net/<dbname>?retryWrites=true&w=majority";

const connectDB = async() =>{
    // async this non-block stream
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
    console.log("Server connected");
};

module.exports = connectDB;