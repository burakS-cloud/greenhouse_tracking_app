var mongoose = require("mongoose");

var userSchema = new mongoose.Schema(
  {
    sicaklik: { type: Number, required: true },
    tarih: { type: Number, required: true },
    nem: { type: Number, required: true },
    suSeviyesi: { type: Number, required: true },
  },
  { collection: "data" }
);

module.exports = mongoose.model("Data", userSchema);
