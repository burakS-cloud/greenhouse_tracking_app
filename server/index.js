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


app.listen(4000, (err,success) => {
    if(err) {
        console.log(err)
    } else {
        console.log(`Server is running on port 4000`)
    }
})