const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://Krishnajatav:Krishna2322@cluster0.hhaxyt6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const mongoDB =async() => {
     await mongoose.connect(mongoURI,{useNewUrlParser:true},()=>{
        console.log("connected");
    });
}

module.exports = mongoDB;