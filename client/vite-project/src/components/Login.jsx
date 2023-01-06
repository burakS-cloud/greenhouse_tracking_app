import { useState } from 'react'
import { useAuth } from '../contexts/auth'
import LoginPageCSS from "./Login.module.css"


function App() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const auth = useAuth();

	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:4000/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.user) {
			localStorage.setItem('token', data.user)
			auth.login(data.user)
			window.location.href = '/'
		} else {
			alert('Please check your username and password')
		}
	}

	return (
		// <div>
		// 	<h2>Login</h2>
		// 	<form onSubmit={loginUser}>
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
		// 		<input type="submit" value="Login" />
		// 	</form>
		// </div>


		<div className={LoginPageCSS.wrapper}>
			<form onSubmit={loginUser}>
		<div className={LoginPageCSS.box}>
    		<div className={LoginPageCSS.container}>
        <div className="top">
            <span>Have an account?</span>
            <header>Login</header>
        </div>
        <div className={LoginPageCSS.inputField}>
            <input onChange={(e) => setEmail(e.target.value)} type="email" className={LoginPageCSS.input} value={email} placeholder="Email" id="email"/>
            <i className='bx bx-user' ></i>
        </div>
        <div className={LoginPageCSS.inputField}>
            <input onChange={(e) => setPassword(e.target.value)} type="password" className={LoginPageCSS.input} value={password} placeholder="Password" id="password"/>
            <i className='bx bx-lock-alt'></i>
        </div>
        <div className={LoginPageCSS.inputField}>
            <input type="submit" className={LoginPageCSS.submit} value="Login" id="submit"/>
        </div>
        <div className={LoginPageCSS.two}>
            <div className={LoginPageCSS.one}>
               <input type="checkbox" name="" id="check"/>
               <label htmlFor="check"> Remember Me</label>
            </div>
            <div className={LoginPageCSS.two}>
                <label><a href="#">Forgot password?</a></label>
            </div>
        </div>
    </div>
</div> 
</form> 
</div>
	)
}

export default App