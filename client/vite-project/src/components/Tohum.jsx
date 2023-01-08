import React from 'react'
import DataEntryComponent from './DataEntryComponent'

const Tohum = () => {
   const tohumTurleri = [
    "Tür Seçiniz",
     "Marul Tohumu",
     "Kereviz Tohumu",
     "Hindibağ Tohumu",
     "Maydonoz Tohumu"
  ]

  return (
    <DataEntryComponent turArr={tohumTurleri} title={"Tohum"}/>
  )
}

export default Tohum