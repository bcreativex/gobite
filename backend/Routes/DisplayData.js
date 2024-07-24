const express = require("express");
const router = express.Router();

router.post('/foodData',(req, res)=> {
    try {
        // console.log(global.Krishna)
       res.send([global.Krishna,global.foodCategory])
    } catch (error){
       console.log(error.message);
       res.send("server Error")
    }
})

module.exports = router;