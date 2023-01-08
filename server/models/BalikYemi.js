var mongoose = require("mongoose");

var balikYemiSchema = new mongoose.Schema(
  {
    alisTarihi: { type: String, required: true },
    tur: { type: String, required: true },
    miktar: { type: Number, required: true },
    miktarTuru: { type: String, required: true },
    fiyat: { type: Number, required: true },
    toplamFiyat: { type: Number, sparse:true },
    islem: { type: String, required:true }
  },
  { collection: "balikYemi" }
);

module.exports = mongoose.model("BalikYemi", balikYemiSchema);
