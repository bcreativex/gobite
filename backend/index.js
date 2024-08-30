const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT;
const mongoDB = require("./database")
const cors = require ("cors");
const stripe = require("stripe")("sk_test_51PmJHa049GpZfud4xSCIX4u1A7RiVqTzJxkUnEYQiH70zRllQ8V6QWSMFuGEAKPx0JG8s6HdxuVKQqpy6fNOehsq00oXtiult5")

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})

// checkout
app.post("/api/checkout", async(req,res)=> {
  const products = req.body;
  console.log("index wali file")
  console.log(products)
  // const lineItems = products.map((product)=>({
  //   price_data:{
  //     currency:"inr",
  //     product_data:{
  //       name:product.name
  //     },
  //     unit_amount:product.price * 100,
  //   },
  //   quantity:product.qty
  // }));

  // const session = await stripe.checkout.sessions.create({
  //   Payment_method_types:["card"],
  //   line_items:lineItems,
  //   mode:"payment",
  //   success_url:"http://localhost:3000/success",
  //   cancel_url:"http://localhost:3000/cancel",
  // });
  
  // res.json({id:session.id})
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