const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT;
const mongoDB = require("./database")
const cors = require ("cors");

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","https://frontend-new-lemon.vercel.app");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})

// checkout
app.post("/api/checkout", async(req,res)=> {
  const products = await req.body;

})

mongoDB();
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json())
app.use(cors())
app.use('/api',require("./Routes/CreateUser"));
app.use('/api',require("./Routes/DisplayData"));
app.use('/api',require("./Routes/OrderData"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})