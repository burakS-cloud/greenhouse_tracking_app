var mongoose = require("mongoose");

var mamulSchema = new mongoose.Schema(
  {
    alisTarihi: { type: String, required: true },
    tur: { type: String, required: true },
    miktar: { type: Number, required: true },
    miktarTuru: { type: String, required: true },
    fiyat: { type: Number, required: true },
    toplamFiyat: { type: Number, sparse: true },
    islem: { type: String, required: true },
  },
  { collection: "mamul" }
);

module.exports = mongoose.model("Mamul", mamulSchema);
