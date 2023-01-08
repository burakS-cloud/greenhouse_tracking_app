const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/Users')
const Mamul = require('./models/Mamul');
const BalikYemi = require('./models/BalikYemi');
const Balik = require('./models/Balik');
const Tohum = require('./models/Tohum');

const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

app.use(cors())
app.use(express.json())

mongoose.set('strictQuery', false);

try {
    mongoose.connect('mongodb+srv://ahmetakif:.x123x..@cluster0.wwk8zq4.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("database connection successful")
} catch (error) {
    console.log(error)
    console.log("database connection failed")
}

// User.create({
//     user_email: "bsurumcuoglu@gmail.com",
//     password: "2131241241",
//     city: "Bursa"
// })

app.post('/api/register', async (req, res) => {
	console.log(req.body)
	try {
		const newPassword = await bcrypt.hash(req.body.password, 10)
		await User.create({
			city: req.body.city,
			email: req.body.email,
			password: newPassword,
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
})

app.post('/api/login', async (req, res) => {
	const user = await User.findOne({
		email: req.body.email,
	})

	if (!user) {
		return { status: 'error', error: 'Invalid login' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				city: user.city,
				email: user.email,
			},
			'secret123'
		)

		return res.json({ status: 'ok', user: token })
	} else {
		return res.json({ status: 'error', user: false })
	}
})

app.post('/api/tohum', async(req, res) => {
	console.log("req.body:",req.body)
	res.json("tohum route")
})

app.post("/api/balik", async (req, res) => {
  console.log("req.body:", req.body);
  res.json("balik route");
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
  const newBalikYemi = await BalikYemi.create({
    alisTarihi,
    fiyat,
    miktarTuru,
    miktar,
    islem,
    tur,
    toplamFiyat,
  });

  
  const tabletBalikYemi = await BalikYemi.find({tur: 'Tablet Yem'})
  if(tabletBalikYemi) {
	const tabletBalikYemiLength = tabletBalikYemi.length;
		for (let i = 0; i < tabletBalikYemiLength; i++) {
			if(tabletBalikYemi[i].islem === 'Ekle'){
				tabletYemTotal += tabletBalikYemi[i].miktar;
			} else {
				tabletYemTotal -= tabletBalikYemi[i].miktar;
			}		
		}
  }
  const pulBalikYemi = await BalikYemi.find({ tur: "Pul Yem" });
  if (pulBalikYemi) {
    const pulBalikYemiLength = pulBalikYemi.length;
    for (let i = 0; i < eklenenBalikYemiLength; i++) {
      if (pulBalikYemi[i].islem === "Ekle") {
        pulYemTotal += pulBalikYemi[i].miktar;
      } else {
        pulYemTotal -= pulBalikYemi[i].miktar;
      }
    }
  }
  
//   const çıkarılanBalikYemi = await BalikYemi.find({tur: 'Tablet Yem', islem: 'Çıkart'})
//   const çıkarılanBalikYemiLength = çıkarılanBalikYemi.length;
//   for (let i = 0; i < çıkarılanBalikYemiLength; i++) {
//     sum -= çıkarılanBalikYemi[i].miktar;
//   }
//   console.log("elde kalan:", )
  console.log("remaining:", tabletYemTotal);
  res.json("balikyemi route");
});

app.post("/api/mamul", async (req, res) => {
  console.log("req.body:", req.body);
  res.json("mamul route");
});


app.listen(4000, (err,success) => {
    if(err) {
        console.log(err)
    } else {
        console.log(`Server is running on port 4000`)
    }
})