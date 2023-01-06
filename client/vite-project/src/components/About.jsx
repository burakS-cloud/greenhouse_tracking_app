import React from 'react'
import Navbar from './Navbar'
const About = () => {
  const fakeData = [
    {
      name: 'Ali',
      miktar:10
    },
    {
      name: 'Veli',
      miktar:50
    },
    {
      name: 'Ahmet',
      miktar:100
    }
  ]
  return (
    <>
      <Navbar/>
      <div>About page akif</div>
      <select name="balikYemiName" id="balikYemiName">
        {fakeData.map((data,i) => {
          return (
            <option key={i} value={data.name}>{data.name}</option>
          )
        })}
      </select>
      <select name="balikYemiMiktar" id="balikYemiMiktar">
        {fakeData.map((data,i) => {
          return (
            <option key={i} value={data.miktar}>{data.miktar}</option>
          )
        })}
      </select>
    </>
    
  )
}

export default About