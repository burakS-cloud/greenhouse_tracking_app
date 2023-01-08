var mongoose = require("mongoose");

var tohumSchema = new mongoose.Schema(
  {
    alisTarihi: { type: String, required: true },
    tur: { type: String, required: true },
    miktar: { type: Number, required: true },
    miktarTuru: { type: String, required: true },
    fiyat: { type: Number, required: true },
    toplamFiyat: { type: Number, sparse: true },
    islem: { type: String, required: true },
  },
  { collection: "tohum" }
);

module.exports = mongoose.model("Tohum", tohumSchema);
