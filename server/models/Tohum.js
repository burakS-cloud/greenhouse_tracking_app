var mongoose = require("mongoose");

var tohumSchema = new mongoose.Schema(
  {
    alisTarihi: { type: String, required: true },
    tur: { type: String, enum: ["a,b"], default: "b", required: true },
    miktar: { type: Number, required: true },
    miktarTuru: {
      type: String,
      enum: ["kg", "adet"],
      default: "kg",
      required: true,
    },
    fiyat: { type: Number, required: true },
    toplamFiyat: { type: Number, sparse: true },
  },
  { collection: "tohum" }
);

module.exports = mongoose.model("Tohum", tohumSchema);
