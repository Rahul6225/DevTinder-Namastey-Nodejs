const express = require('express')
const app = express();


app.use('/test',(req,res)=>{
    res.send("Hello from Serevr");
    
})

app.listen(3000,()=>{
    console.log("Server Started on port:3000..");
})