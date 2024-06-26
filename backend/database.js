const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://Krishnajatav:Krishna2322@cluster0.hhaxyt6.mongodb.net/gobite?retryWrites=true&w=majority'
const mongoDB =async() => {
     await mongoose.connect(mongoURI,{useNewUrlParser: true},async(err,result)=>{
        if(err) console.log("---",err) 
        else{    
            console.log("connected");
            const fetched_data =  await mongoose.connection.db.collection("Krishna");
            fetched_data.find({}).toArray(function( err,data){
                 if(err) console.log(err);
                 else console.log(data);
            })
        }
    });
}

module.exports = mongoDB;