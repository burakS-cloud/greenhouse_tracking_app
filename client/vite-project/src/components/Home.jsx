import React from 'react'
import { useNavigate } from "react-router-dom";
import Weather from './Weather';
import Navbar from './Navbar';
const Home = () => {
    let navigate = useNavigate();

  return (
    <>
    <Navbar/>
    {/* <button onClick={() => navigate('/about')}>Go About</button> */}
    <div style={{display:'flex', justifyContent:'flex-end'}}>
    <div style={{marginTop:'1em', width:'50%', }}>
      <Weather/>
    </div>
    </div> 
    </>
  )
}

export default Home