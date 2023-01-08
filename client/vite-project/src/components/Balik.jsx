import React from 'react'
import DataEntryComponent from './DataEntryComponent'
import Navbar from './Navbar'

const Balik = () => {

  const balikTurleri = [
     "Tür Seçiniz",
     "Kılıç",
     "Tekir",
      "Kefal",
      "Lüfer",
      "Hamsi",
      "Çipura",
      "Mezgit",
      "Kolyos"
  ]

  // 
  return (
    <>
    <Navbar/>
    <DataEntryComponent turArr={balikTurleri} title={"Balık"}/>
    </>
    
  )
}

export default Balik