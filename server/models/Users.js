var mongoose = require("mongoose");

var userSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, required:true },
    password: { type: String, unique:true, required:true },
    city: { type: String, required: true }
  },
  { collection: "users" }
);


module.exports = mongoose.model("User", userSchema);