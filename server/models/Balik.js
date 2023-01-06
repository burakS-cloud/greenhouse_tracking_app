var mongoose = require("mongoose");

var balikSchema = new mongoose.Schema(
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
  { collection: "balik" }
);

module.exports = mongoose.model("Balik", balikSchema);
