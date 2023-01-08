import React from 'react'
import DataEntryComponent from './DataEntryComponent'

const BalikYemi = () => {
  const balikYemiTurleri = [
    "Tür Seçiniz",
    "Pul Yem",
    "Cips Balık Yemi",
    "Yavru Balık Yemi",
    "Tablet Yem",
    "Jel Sıvı Balık Yemi",
    "Kurutulmuş Yem",
    "Dondurulmuş Yem",
    "Tatil Yemi",
  ]
  return (
    <DataEntryComponent turArr={balikYemiTurleri}  title={"Balık Yemi"}/>
  )
}

export default BalikYemi