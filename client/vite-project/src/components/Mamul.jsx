import React from 'react'
import DataEntryComponent from './DataEntryComponent'

const Mamul = () => {

   const mamulTurleri = [
    "Tür Seçiniz",
     "Marul",
     "Kereviz",
     "Hindibağ",
     "Maydonoz"
  ]

  return (
    <DataEntryComponent turArr={mamulTurleri} title={"Mamül"}/>
  )
}

export default Mamul