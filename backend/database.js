const mongoose = require("mongoose");
require('dotenv').config()
const mongoURI = (process.env.MONGO_URL);

const mongoDB = async () => {
  await mongoose.connect(
    mongoURI,
    { useNewUrlParser: true },
    async (err, result) => {
      if (err) console.log("---", err);
      else {
        console.log("connected");
        const fetched_data = await mongoose.connection.db.collection("Krishna");
        fetched_data.find({}).toArray(async function (err, data) {
          const foodCategory = await mongoose.connection.db.collection(
            "foodCategory"
          );
          foodCategory.find({}).toArray(function (err, catData) {
            if (err) console.log(err);
            else {
              global.Krishna = data;
              global.foodCategory = catData;
            }
          })
          //  if(err) console.log(err);
          //  else{
          //   global.Krishna = data;
          //   console.log(global.Krishna)
          //  }
        });
      }
    }
  );
};

module.exports = mongoDB;
