var mongoose = require("mongoose");

var balikYemiSchema = new mongoose.Schema(
  {
    alisTarihi: { type: String, required: true },
    tur: { type: String, enum:['a,b'], default:'b', required: true },
    miktar: { type: Number, required: true },
    miktarTuru: { type: String, enum: ['kg', 'adet'], default:'kg', required: true },
    fiyat: { type: Number, required: true },
    toplamFiyat: { type: Number, sparse:true }
  },
  { collection: "balikYemi" }
);

module.exports = mongoose.model("BalikYemi", balikYemiSchema);
