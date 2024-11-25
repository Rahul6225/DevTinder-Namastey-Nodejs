const express = require("express");

const app = express();
const {adminAuth,userAuth} = require('./Middleware/Auth.js')

app.use('/admin',adminAuth);

app.get('/user', userAuth,(req,res)=>{
  res.send("Data Sent2") 
})
app.get('/admin/getAlldata',(req,res)=>{
  res.send("Data Sent3")
})
app.get('/admin/DeleteUser',(req,res)=>{
  res.send("Data Sent4")
})

// app.use("/user", (req, res) => {
//    console.log("Handling the First Route-1");
//    res.send("1st Rseponse")
//   },
// );


// app.use("/user", (req, res,next) => {
//    console.log(" HAndling the first Route-1 ");
// //    res.send("1st Rseponse")
//    next();
//   },
//   (req,res)=>{
//     console.log("Handling the first Route-2");
//     res.send("3nd Response")
//   },
//   (req,res)=>{
//     console.log("Handling the first Route-2");
//     res.send("4th Response")
//   },
//   (req,res)=>{
//     console.log("Handling the first Route-2");
//     res.send("5th Response")
//   }
// );






  app.listen(3000, () => {
    console.log("Server Started on port:3000..");
  });

// app.get("/ab+c", (req, res) => {
//     res.send({ name: "Dev", lastName: "Simgh" });
//   });
  
// app.get("/use?r", (req, res) => {
//   res.send({ name: "rahul", lastName: "Simgh" });
// });

// app.post("/user", (req, res) => {
//   res.send("data saved Successfully");
// });
// app.delete("/user", (req, res) => {
//   res.send("data deleted");
// });
// app.use("/test", (req, res) => {
//   res.send("Hello from Serevr");
// });

// app.use('/hello',(req,res)=>{
//     res.send("hello hello hello");  //Order of routing matters a lot

// })
// app.use('/',(req,res)=>{
//     res.send("Namastey Rahul")
// })
