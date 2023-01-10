// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// const User = require('./models/Users')
// const Mamul = require('./models/Mamul');
// const BalikYemi = require('./models/BalikYemi');
// const Balik = require('./models/Balik');
// const Tohum = require('./models/Tohum');

// const cors = require('cors')
// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcryptjs')

// app.use(cors())
// app.use(express.json())

// mongoose.set('strictQuery', false);

// try {
//     mongoose.connect('mongodb+srv://ahmetakif:.x123x..@cluster0.wwk8zq4.mongodb.net/?retryWrites=true&w=majority', {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     });
//     console.log("database connection successful")
// } catch (error) {
//     console.log(error)
//     console.log("database connection failed")
// }

// // User.create({
// //     user_email: "bsurumcuoglu@gmail.com",
// //     password: "2131241241",
// //     city: "Bursa"
// // })

// app.post('/api/register', async (req, res) => {
// 	console.log(req.body)
// 	try {
// 		const newPassword = await bcrypt.hash(req.body.password, 10)
// 		await User.create({
// 			city: req.body.city,
// 			email: req.body.email,
// 			password: newPassword,
// 		})
// 		res.json({ status: 'ok' })
// 	} catch (err) {
// 		res.json({ status: 'error', error: 'Duplicate email' })
// 	}
// })

// app.post('/api/login', async (req, res) => {
// 	const user = await User.findOne({
// 		email: req.body.email,
// 	})

// 	if (!user) {
// 		return { status: 'error', error: 'Invalid login' }
// 	}

// 	const isPasswordValid = await bcrypt.compare(
// 		req.body.password,
// 		user.password
// 	)

// 	if (isPasswordValid) {
// 		const token = jwt.sign(
// 			{
// 				city: user.city,
// 				email: user.email,
// 			},
// 			'secret123'
// 		)

// 		return res.json({ status: 'ok', user: token })
// 	} else {
// 		return res.json({ status: 'error', user: false })
// 	}
// })

// app.post('/api/tohum', async(req, res) => {
// 	console.log("req.body:",req.body)
// 	res.json("tohum route")
// })

// app.post("/api/balik", async (req, res) => {
//   console.log("req.body:", req.body);
//   res.json("balik route");
// });

// app.post("/api/balikyemi", async (req, res) => {
//   console.log("req.body:", req.body);
  
//   let tabletYemTotal = 0;
//   let pulYemTotal = 0;
//   let cipsYemTotal = 0;
//   let yavruYemTotal = 0;
//   let jelYemTotal = 0;
//   let kurutulmusYemTotal = 0;
//   let dondurulmusYemTotal = 0;
//   let tatilYemTotal = 0;
//   const { fiyat, miktar, miktarTuru, islem, tur, alisTarihi } = req.body;
//   const toplamFiyat = miktar * fiyat;
//   const newBalikYemi = await BalikYemi.create({
//     alisTarihi,
//     fiyat,
//     miktarTuru,
//     miktar,
//     islem,
//     tur,
//     toplamFiyat,
//   });

  
//   const tabletBalikYemi = await BalikYemi.find({tur: 'Tablet Yem'})
//   if(tabletBalikYemi) {
// 	const tabletBalikYemiLength = tabletBalikYemi.length;
// 		for (let i = 0; i < tabletBalikYemiLength; i++) {
// 			if(tabletBalikYemi[i].islem === 'Ekle'){
// 				tabletYemTotal += tabletBalikYemi[i].miktar;
// 			} else {
// 				tabletYemTotal -= tabletBalikYemi[i].miktar;
// 			}		
// 		}
//   }
//   const pulBalikYemi = await BalikYemi.find({ tur: "Pul Yem" });
//   if (pulBalikYemi) {
//     const pulBalikYemiLength = pulBalikYemi.length;
//     for (let i = 0; i < eklenenBalikYemiLength; i++) {
//       if (pulBalikYemi[i].islem === "Ekle") {
//         pulYemTotal += pulBalikYemi[i].miktar;
//       } else {
//         pulYemTotal -= pulBalikYemi[i].miktar;
//       }
//     }
//   }
  
// //   const çıkarılanBalikYemi = await BalikYemi.find({tur: 'Tablet Yem', islem: 'Çıkart'})
// //   const çıkarılanBalikYemiLength = çıkarılanBalikYemi.length;
// //   for (let i = 0; i < çıkarılanBalikYemiLength; i++) {
// //     sum -= çıkarılanBalikYemi[i].miktar;
// //   }
// //   console.log("elde kalan:", )
//   console.log("remaining:", tabletYemTotal);
//   res.json("balikyemi route");
// });

// app.post("/api/mamul", async (req, res) => {
//   console.log("req.body:", req.body);
//   res.json("mamul route");
// });


// app.listen(4000, (err,success) => {
//     if(err) {
//         console.log(err)
//     } else {
//         console.log(`Server is running on port 4000`)
//     }
// })
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/Users");
const Mamul = require("./models/Mamul");
const BalikYemi = require("./models/BalikYemi");
const Balik = require("./models/Balik");
const Tohum = require("./models/Tohum");
const Data = require("./models/Data")

const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

app.use(cors());
app.use(express.json());

mongoose.set("strictQuery", false);

try {
  mongoose.connect(
    "mongodb+srv://ahmetakif:.x123x..@cluster0.wwk8zq4.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  console.log("database connection successful");
} catch (error) {
  console.log(error);
  console.log("database connection failed");
}

// User.create({
//     user_email: "bsurumcuoglu@gmail.com",
//     password: "2131241241",
//     city: "Bursa"
// })

app.post("/api/register", async (req, res) => {
  console.log(req.body);
  try {
    const newPassword = await bcrypt.hash(req.body.password, 10);
    await User.create({
      city: req.body.city,
      email: req.body.email,
      password: newPassword,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Duplicate email" });
  }
});

app.post("/api/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
  });

  if (!user) {
    return { status: "error", error: "Invalid login" };
  }

  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (isPasswordValid) {
    const token = jwt.sign(
      {
        city: user.city,
        email: user.email,
      },
      "secret123"
    );

    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ status: "error", user: false });
  }
});

app.post("/api/tohum", async (req, res) => {
  console.log("req.body:", req.body);

  let marulTohumTotal = 0;
  let kerevizTohumTotal = 0;
  let hindibagTohumTotal = 0;
  let maydanozTohumTotal = 0;

  const { fiyat, miktar, miktarTuru, islem, tur, alisTarihi } = req.body;
  const toplamFiyat = miktar * fiyat;
  let newTohum =
    islem === "Ekle"
      ? await Tohum.create({
          alisTarihi,
          fiyat,
          miktarTuru,
          miktar,
          islem,
          tur,
          toplamFiyat,
        })
      : await Tohum.create({
          alisTarihi,
          fiyat,
          miktarTuru,
          miktar,
          islem,
          tur,
        });

  const marulTohum = await Tohum.find({ tur: "Marul Tohumu" });
  if (marulTohum!== undefined) {
    const marulTohumLength = marulTohum.length;
    for (let i = 0; i < marulTohumLength; i++) {
      if (marulTohum[i].islem === "Ekle") {
        marulTohumTotal += marulTohum[i].miktar;
      } else {
        marulTohumTotal -= marulTohum[i].miktar;
      }
    }
  }
  const kerevizTohumu = await Tohum.find({ tur: "Kereviz Tohumu" });
  if (kerevizTohumu) {
    const kerevizTohumuLength = kerevizTohumu.length;
    for (let i = 0; i < kerevizTohumuLength; i++) {
      if (kerevizTohumu[i].islem === "Ekle") {
        kerevizTohumTotal += kerevizTohumu[i].miktar;
      } else {
        kerevizTohumTotal -= kerevizTohumu[i].miktar;
      }
    }
  }
  const hindibagTohumu = await Tohum.find({ tur: "Hindibağ Tohumu" });
  if (hindibagTohumu) {
    const hindibagTohumuLength = hindibagTohumu.length;
    for (let i = 0; i < hindibagTohumuLength; i++) {
      if (hindibagTohumu[i].islem === "Ekle") {
        hindibagTohumTotal += hindibagTohumu[i].miktar;
      } else {
        hindibagTohumTotal -= hindibagTohumu[i].miktar;
      }
    }
  }
  const maydanozTohumu = await Tohum.find({ tur: "Maydanoz Tohumu" });
  if (maydanozTohumu) {
    const maydanozTohumuLength = maydanozTohumu.length;
    for (let i = 0; i < maydanozTohumuLength; i++) {
      if (maydanozTohumu[i].islem === "Ekle") {
        maydanozTohumTotal += maydanozTohumu[i].miktar;
      } else {
        maydanozTohumTotal -= maydanozTohumu[i].miktar;
      }
    }
  }

  res.json(newTohum);
});

app.post("/api/balik", async (req, res) => {
  console.log("req.body:", req.body);

  let kilicTotal = 0;
  let tekirTotal = 0;
  let kefalTotal = 0;
  let lüferTotal = 0;
  let hamsiTotal = 0;
  let cipuraTotal = 0;
  let mezgitTotal = 0;
  let kolyosTotal = 0;

  const { fiyat, miktar, miktarTuru, islem, tur, alisTarihi } = req.body;
  const toplamFiyat = miktar * fiyat;

  let newBalik =
    islem === "Ekle"
      ? await Balik.create({
          alisTarihi,
          fiyat,
          miktarTuru,
          miktar,
          islem,
          tur,
          toplamFiyat,
        })
      : await Balik.create({
          alisTarihi,
          fiyat,
          miktarTuru,
          miktar,
          islem,
          tur,
        });

  const kilic = await Balik.find({ tur: "Kılıç" });
  if (kilic) {
    const kilicLength = kilic.length;
    for (let i = 0; i < kilicLength; i++) {
      if (kilic[i].islem === "Ekle") {
        kilicTotal += kilic[i].miktar;
      } else {
        kilicTotal -= kilic[i].miktar;
      }
    }
  }
  const tekir = await Balik.find({ tur: "Tekir" });
  if (tekir) {
    const tekirLength = tekir.length;
    for (let i = 0; i < tekirLength; i++) {
      if (tekir[i].islem === "Ekle") {
        tekirTotal += tekir[i].miktar;
      } else {
        tekirTotal -= tekir[i].miktar;
      }
    }
  }
  const kefal = await Balik.find({ tur: "Kefal" });
  if (kefal) {
    const kefalLength = kefal.length;
    for (let i = 0; i < kefalLength; i++) {
      if (kefal[i].islem === "Ekle") {
        kefalTotal += kefal[i].miktar;
      } else {
        kefalTotal -= kefal[i].miktar;
      }
    }
  }
  const lüfer = await Tohum.find({ tur: "Lüfer" });
  if (lüfer) {
    const lüferLength = lüfer.length;
    for (let i = 0; i < lüferLength; i++) {
      if (lüfer[i].islem === "Ekle") {
        lüferTotal += lüfer[i].miktar;
      } else {
        lüferTotal -= lüfer[i].miktar;
      }
    }
  }
  const hamsi = await Balik.find({ tur: "Hamsi" });
  if (hamsi) {
    const hamsiLength = hamsi.length;
    for (let i = 0; i < hamsiLength; i++) {
      if (hamsi[i].islem === "Ekle") {
        hamsiTotal += hamsi[i].miktar;
      } else {
        hamsiTotal -= hamsi[i].miktar;
      }
    }
  }
  const cipura = await Balik.find({ tur: "Çipura" });
  if (cipura) {
    const cipuraLength = cipura.length;
    for (let i = 0; i < cipuraLength; i++) {
      if (cipura[i].islem === "Ekle") {
        cipuraTotal += cipura[i].miktar;
      } else {
        cipuraTotal -= cipura[i].miktar;
      }
    }
  }
  const mezgit = await Balik.find({ tur: "Mezgit" });
  if (mezgit) {
    const mezgitLength = mezgit.length;
    for (let i = 0; i < mezgitLength; i++) {
      if (mezgit[i].islem === "Ekle") {
        mezgitTotal += mezgit[i].miktar;
      } else {
        mezgitTotal -= mezgit[i].miktar;
      }
    }
  }
  const kolyos = await Balik.find({ tur: "Kolyos" });
  if (kolyos) {
    const kolyosLength = kolyos.length;
    for (let i = 0; i < kolyosLength; i++) {
      if (kolyos[i].islem === "Ekle") {
        kolyosTotal += kolyos[i].miktar;
      } else {
        kolyosTotal -= kolyos[i].miktar;
      }
    }
  }

  res.json(newBalik);
});

app.post("/api/balikyemi", async (req, res) => {
  console.log("req.body:", req.body);

  let tabletYemTotal = 0;
  let pulYemTotal = 0;
  let cipsYemTotal = 0;
  let yavruYemTotal = 0;
  let jelYemTotal = 0;
  let kurutulmusYemTotal = 0;
  let dondurulmusYemTotal = 0;
  let tatilYemTotal = 0;
  const { fiyat, miktar, miktarTuru, islem, tur, alisTarihi } = req.body;
  const toplamFiyat = miktar * fiyat;

  let newBalikYemi =
    islem === "Ekle"
      ? await BalikYemi.create({
          alisTarihi,
          fiyat,
          miktarTuru,
          miktar,
          islem,
          tur,
          toplamFiyat,
        })
      : await BalikYemi.create({
          alisTarihi,
          fiyat,
          miktarTuru,
          miktar,
          islem,
          tur,
        });

  const tabletBalikYemi = await BalikYemi.find({ tur: "Tablet Yem" });
  if (tabletBalikYemi) {
    const tabletBalikYemiLength = tabletBalikYemi.length;
    for (let i = 0; i < tabletBalikYemiLength; i++) {
      if (tabletBalikYemi[i].islem === "Ekle") {
        tabletYemTotal += tabletBalikYemi[i].miktar;
      } else {
        tabletYemTotal -= tabletBalikYemi[i].miktar;
      }
    }
  }
  const pulBalikYemi = await BalikYemi.find({ tur: "Pul Yem" });
  if (pulBalikYemi) {
    const pulBalikYemiLength = pulBalikYemi.length;
    for (let i = 0; i < pulBalikYemiLength; i++) {
      if (pulBalikYemi[i].islem === "Ekle") {
        pulYemTotal += pulBalikYemi[i].miktar;
      } else {
        pulYemTotal -= pulBalikYemi[i].miktar;
      }
    }
  }
  const cipsBalikYemi = await BalikYemi.find({ tur: "Cips Balık Yemi" });
  if (cipsBalikYemi) {
    const cipsBalikYemiLength = cipsBalikYemi.length;
    for (let i = 0; i < cipsBalikYemiLength; i++) {
      if (cipsBalikYemi[i].islem === "Ekle") {
        cipsYemTotal += cipsBalikYemi[i].miktar;
      } else {
        cipsYemTotal -= cipsBalikYemi[i].miktar;
      }
    }
  }
  const yavruBalikYemi = await BalikYemi.find({ tur: "Yavru Balık Yemi" });
  if (cipsBalikYemi) {
    const yavruBalikYemiLength = yavruBalikYemi.length;
    for (let i = 0; i < yavruBalikYemiLength; i++) {
      if (yavruBalikYemi[i].islem === "Ekle") {
        yavruYemTotal += yavruBalikYemi[i].miktar;
      } else {
        yavruYemTotal -= yavruBalikYemi[i].miktar;
      }
    }
  }
  const jelSiviBalikYemi = await BalikYemi.find({ tur: "Jel Sıvı Balık Yemi" });
  if (jelSiviBalikYemi) {
    const jelSiviBalikYemiLength = jelSiviBalikYemi.length;
    for (let i = 0; i < jelSiviBalikYemiLength; i++) {
      if (jelSiviBalikYemi[i].islem === "Ekle") {
        jelYemTotal += jelSiviBalikYemi[i].miktar;
      } else {
        jelYemTotal -= jelSiviBalikYemi[i].miktar;
      }
    }
  }
  const kurutulmusBalikYemi = await BalikYemi.find({ tur: "Kurutulmuş Yem" });
  if (kurutulmusBalikYemi) {
    const kurutulmusBalikYemiLength = kurutulmusBalikYemi.length;
    for (let i = 0; i < kurutulmusBalikYemiLength; i++) {
      if (kurutulmusBalikYemi[i].islem === "Ekle") {
        kurutulmusYemTotal += kurutulmusBalikYemi[i].miktar;
      } else {
        kurutulmusYemTotal -= kurutulmusBalikYemi[i].miktar;
      }
    }
  }
  const dondurulmusBalikYemi = await BalikYemi.find({ tur: "Dondurulmuş Yem" });
  if (dondurulmusBalikYemi) {
    const dondurulmusBalikYemiLength = dondurulmusBalikYemi.length;
    for (let i = 0; i < dondurulmusBalikYemiLength; i++) {
      if (dondurulmusBalikYemi[i].islem === "Ekle") {
        dondurulmusYemTotal += dondurulmusBalikYemi[i].miktar;
      } else {
        dondurulmusYemTotal -= dondurulmusBalikYemi[i].miktar;
      }
    }
  }
  const tatilBalikYemi = await BalikYemi.find({ tur: "Tatil Yemi" });
  if (tatilBalikYemi) {
    const tatilBalikYemiLength = tatilBalikYemi.length;
    for (let i = 0; i < tatilBalikYemiLength; i++) {
      if (tatilBalikYemi[i].islem === "Ekle") {
        tatilYemTotal += tatilBalikYemi[i].miktar;
      } else {
        tatilYemTotal -= tatilYemi[i].miktar;
      }
    }
  }
  //   const çıkarılanBalikYemi = await BalikYemi.find({tur: 'Tablet Yem', islem: 'Çıkart'})
  //   const çıkarılanBalikYemiLength = çıkarılanBalikYemi.length;
  //   for (let i = 0; i < çıkarılanBalikYemiLength; i++) {
  //     sum -= çıkarılanBalikYemi[i].miktar;
  //   }
  //   console.log("elde kalan:", )
  res.json(newBalikYemi);
});

app.post("/api/mamul", async (req, res) => {
  console.log("req.body:", req.body);
  let marulTotal = 0;
  let kerevizTotal = 0;
  let hindibagTotal = 0;
  let maydanozTotal = 0;

  const { fiyat, miktar, miktarTuru, islem, tur, alisTarihi } = req.body;
  const toplamFiyat = miktar * fiyat;
  let newMamul =
    islem === "Ekle"
      ? await Mamul.create({
          alisTarihi,
          fiyat,
          miktarTuru,
          miktar,
          islem,
          tur,
          toplamFiyat,
        })
      : await Mamul.create({
          alisTarihi,
          fiyat,
          miktarTuru,
          miktar,
          islem,
          tur
        });

  const marul = await Mamul.find({ tur: "Marul" });
  if (marul) {
    const marulLength = marul.length;
    for (let i = 0; i < marulLength; i++) {
      if (marul[i].islem === "Ekle") {
        marulTotal += marul[i].miktar;
      } else {
        marulTotal -= marul[i].miktar;
      }
    }
  }
  const kereviz = await Mamul.find({ tur: "Kereviz" });
  if (kereviz) {
    const kerevizLength = kereviz.length;
    for (let i = 0; i < kerevizLength; i++) {
      if (kereviz[i].islem === "Ekle") {
        kerevizTotal += marul[i].miktar;
      } else {
        kerevizTotal -= marul[i].miktar;
      }
    }
  }
  const hindibag = await Mamul.find({ tur: "Hindibağ" });
  if (hindibag) {
    const hindibagLength = hindibag.length;
    for (let i = 0; i < hindibagLength; i++) {
      if (hindibag[i].islem === "Ekle") {
        hindibagTotal += hindibag[i].miktar;
      } else {
        hindibagTotal -= hindibag[i].miktar;
      }
    }
  }
  const maydanoz = await Mamul.find({ tur: "Maydanoz" });
  if (maydanoz) {
    const maydanozLength = maydanoz.length;
    for (let i = 0; i < maydanozLength; i++) {
      if (maydanoz[i].islem === "Ekle") {
        maydanozTotal += maydanoz[i].miktar;
      } else {
        maydanozTotal -= maydanoz[i].miktar;
      }
    }
  }
  res.json(newMamul);
});

app.get('/api/tohum', async(req,res) => {
  const tohumlar = await Tohum.find({});
  console.log(tohumlar);
  res.json(tohumlar);
})

app.get("/api/mamul", async (req, res) => {
  const mamuller = await Mamul.find({});
  console.log(mamuller);
  res.json(mamuller);
});

app.get("/api/balikyemi", async (req, res) => {
  const balikYemleri = await BalikYemi.find({});
  console.log(balikYemleri);
  res.json(balikYemleri);
});

app.get("/api/balik", async (req, res) => {
  const baliklar = await Balik.find({});
  console.log(baliklar);
  res.json(baliklar);
});

app.get('/api/data', async(req,res) => {
  const fetchedData = await Data.find({})
  const lastData = fetchedData[fetchedData.length -1]
  // let lastSevenArr = [];
  // for (let i = fetchedData.length - 1; i >= fetchedData.length - 7; i--) {
  //   lastSevenArr.push(fetchedData[i]);
  // }
  // let reversedLastSevenArr = lastSevenArr.reverse();
  console.log("lastData:", lastData);
  res.json(lastData);
})

app.listen(4000, (err, success) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is running on port 4000`);
  }
});