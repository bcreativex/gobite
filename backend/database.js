const mongoose = require('mongoose');
// const mongoURI = 'mongodb+srv://Krishnajatav:Krishna2322@cluster0.hhaxyt6.mongodb.net/gobite?retryWrites=true&w=majority'
const mongoURI = 'mongodb://Krishnajatav:Krishna2322@ac-e2csb6n-shard-00-00.hhaxyt6.mongodb.net:27017,ac-e2csb6n-shard-00-01.hhaxyt6.mongodb.net:27017,ac-e2csb6n-shard-00-02.hhaxyt6.mongodb.net:27017/gobite?replicaSet=atlas-yp2086-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=Cluster0' 
const mongoDB =async() => {
     await mongoose.connect(mongoURI,{useNewUrlParser: true},async(err,result)=>{
        if(err) console.log("---",err) 
        else{    
            console.log("connected");
            const fetched_data =  await mongoose.connection.db.collection("Krishna");
            fetched_data.find({}).toArray(function( err,data){
                 if(err) console.log(err);
                 else console.log();
            })
        }
    });
}

module.exports = mongoDB;