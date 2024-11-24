const express = require("express");
const app = express();

app.get("/ab* c", (req, res) => {
    res.send({ name: "Dev", lastName: "Simgh" });
  });
app.get("/ab+c", (req, res) => {
    res.send({ name: "Dev", lastName: "Simgh" });
  });
  
app.get("/use?r", (req, res) => {
  res.send({ name: "rahul", lastName: "Simgh" });
});

app.post("/user", (req, res) => {
  res.send("data saved Successfully");
});
app.delete("/user", (req, res) => {
  res.send("data deleted");
});
app.use("/test", (req, res) => {
  res.send("Hello from Serevr");
});
app.listen(3000, () => {
  console.log("Server Started on port:3000..");
});
// app.use('/hello',(req,res)=>{
//     res.send("hello hello hello");  //Order of routing matters a lot

// })
// app.use('/',(req,res)=>{
//     res.send("Namastey Rahul")
// })
