const express = require("express");
const app = express();
const connectDB = require("./config/database");
const User = require("./models/user.js");
app.use(express.json());
app.post("/signup", async (req, res) => {
  console.log(req.body);
  const user = new User(req.body);

  try{
    await user.save();
    res.send("User Added Succefully");
  }catch(err){
    res.send( 400).send("erroer having user " + err.message)
  }


});
connectDB()
  .then(() => {
    console.log("DataBase Connection succeful");
    app.listen(7777, () => {
      console.log("Server Started on port:7777..");
    });
  })
  .catch((err) => {
    console.log("DataBase Error", err);
  });

// const jwt = require("jsonwebtoken");
// const secretkey = "@Rahulsingh123456";

// const payload = {
//   userId: 123,
//   role: "admin",
//   iat: Math.floor(Date.now() / 1000), // Issued at time
//   exp: Math.floor(Date.now() / 1000) + 60 * 60, // Expires in 1 hour
// };

// const token = jwt.sign(payload, secretkey);
// console.log("Generated Token:", token);





// app.use('/',(err,req,res,next)=>{
//   if(err){
//     res.status(404).send("Something went wong")
//   }
// })
// app.get('/getuserData',(req,res)=>{
//   try{
//       //Logic of db call and get the user data
//   throw new error("dfghjfy");
//   res.send("User data Sentt")
//   }catch(error){
//     res.status(404).send("Something went wong again  ")
//   }

// })

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
