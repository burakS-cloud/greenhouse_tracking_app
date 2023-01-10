import React from 'react'
import DataEntryComponent from './DataEntryComponent'
import Navbar from './Navbar'
import Table from './Table'
import BalikCSS from './Document.module.css'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const Balik = () => {

  const { data, refetch } = useQuery(["balik"], () => {
   return axios.get(`http://localhost:4000/api/balik`)
    .then((res) => res.data)
  });

  console.log("data fetch in balik:", data);

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

  return (
    <>
    <Navbar/>
    <div className={BalikCSS.mamulWrapperDiv}>
      <Table tableFetchData={data}/>
      <DataEntryComponent refetch={refetch} turArr={balikTurleri} title={"Balık"}/>
    </div> 
    </>   
  )
}

export default Balik