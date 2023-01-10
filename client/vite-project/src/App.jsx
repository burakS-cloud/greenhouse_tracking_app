import { useState } from 'react'
import About from './components/About'
import Home from './components/Home';
import Weather from './components/Weather';
import Login from './components/Login';
import Register from './components/Register';
// import DataEntryComponent from './components/DataEntryComponent'
import Tohum from "./components/Tohum"
import Balik from "./components/Balik"
import BalikYemi from "./components/BalikYemi"
import Mamul from "./components/Mamul"
import { AuthProvider } from './contexts/auth';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


function App() {

  const client = new QueryClient({defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }});

  return (
    <>
    <AuthProvider>
     <QueryClientProvider client={client}>
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/weather' element={<Weather/>}/>
        <Route path='/tohum' element={<Tohum/>}></Route>
        <Route path='/balik' element={<Balik/>}></Route>
        <Route path='/balikyemi' element={<BalikYemi/>}></Route>
        <Route path='/mamul' element={<Mamul/>}></Route>
      </Routes>
    </Router>
     </QueryClientProvider>
    </AuthProvider>
 
    </>
  )
}

export default App
