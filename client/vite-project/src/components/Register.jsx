import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import RegisterPageCSS from "./Register.module.css"

function App() {
	const navigate = useNavigate()

	const [city, setCity] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:4000/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				city,
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
			navigate('/login')
		}
	}

	return (
		// <div>
		// 	<h1>Register</h1>
		// 	<form onSubmit={registerUser}>
		// 		<input
		// 			value={city}
		// 			onChange={(e) => setCity(e.target.value)}
		// 			type="text"
		// 			placeholder="City"
		// 		/>
		// 		<br />
		// 		<input
		// 			value={email}
		// 			onChange={(e) => setEmail(e.target.value)}
		// 			type="email"
		// 			placeholder="Email"
		// 		/>
		// 		<br />
		// 		<input
		// 			value={password}
		// 			onChange={(e) => setPassword(e.target.value)}
		// 			type="password"
		// 			placeholder="Password"
		// 		/>
		// 		<br />
		// 		<input type="submit" value="Register" />
		// 	</form>
		// </div>

		<div className={RegisterPageCSS.wrapper}>
			<form onSubmit={registerUser}>
		<div className={RegisterPageCSS.box}>
    		<div className={RegisterPageCSS.container}>
        <div className="top">
            <header>Register</header>
        </div>
        <div className={RegisterPageCSS.inputField}>
            <input onChange={(e) => setEmail(e.target.value)} type="email" className={RegisterPageCSS.input} value={email} placeholder="Email" id="email"/>
            <i className='bx bx-user' ></i>
        </div>
		<div className={RegisterPageCSS.inputField}>
            <input onChange={(e) => setCity(e.target.value)} type="text" className={RegisterPageCSS.input} value={city} placeholder="City" id="city"/>
            <i className='bx bx-user' ></i>
        </div>
        <div className={RegisterPageCSS.inputField}>
            <input onChange={(e) => setPassword(e.target.value)} type="password" className={RegisterPageCSS.input} value={password} placeholder="Password" id="password"/>
            <i className='bx bx-lock-alt'></i>
        </div>
        <div className={RegisterPageCSS.inputField}>
            <input type="submit" className={RegisterPageCSS.submit} value="Register" id="submit"/>
        </div>
        {/* <div className={RegisterPageCSS.two}>
            <div className={RegisterPageCSS.one}>
               <input type="checkbox" name="" id="check"/>
               <label htmlFor="check"> Remember Me</label>
            </div>
            <div className={RegisterPageCSS.two}>
                <label><a href="#">Forgot password?</a></label>
            </div>
        </div> */}
    </div>
</div> 
</form> 
</div>
	)
}

export default App