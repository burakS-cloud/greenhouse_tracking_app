import React from 'react'
import DataEntryComponent from './DataEntryComponent'
import Navbar from './Navbar'
import Table from './Table'
import BalikYemiCSS from './Document.module.css'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const BalikYemi = () => {

  const { data, refetch } = useQuery(["balikYemi"], () => {
   return axios.get(`http://localhost:4000/api/balikyemi`)
    .then((res) => res.data)
  });

  console.log("data fetch in balikyemi:", data);

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
    <>
    <Navbar/>
    <div className={BalikYemiCSS.mamulWrapperDiv}>
      <Table tableFetchData={data}/>
      <DataEntryComponent refetch={refetch} turArr={balikYemiTurleri}  title={"Balık Yemi"}/>
    </div>
    
    </>
    
  )
}

export default BalikYemi