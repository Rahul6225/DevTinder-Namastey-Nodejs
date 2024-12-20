const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  emailId: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User; 
