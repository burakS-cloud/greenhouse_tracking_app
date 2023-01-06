import { useState } from 'react'
import About from './components/About'
import Home from './components/Home';
import Weather from './components/Weather';
import Login from './components/Login';
import Register from './components/Register';
import { AuthProvider } from './contexts/auth';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AuthProvider>
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/weather' element={<Weather/>}/>
      </Routes>
    </Router>
    </AuthProvider>
 
    </>
  )
}

export default App
