import React from 'react'
import DataEntryComponent from './DataEntryComponent'
import Navbar from './Navbar'
import Table from './Table'
import TohumCSS from './Document.module.css'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const Tohum = () => {

  const { data, refetch } = useQuery(["tohum"], () => {
   return axios.get(`http://localhost:4000/api/tohum`)
    .then((res) => res.data)
  });

  console.log("data fetch in tohum:", data);

   const tohumTurleri = [
    "Tür Seçiniz",
     "Marul Tohumu",
     "Kereviz Tohumu",
     "Hindibağ Tohumu",
     "Maydanoz Tohumu"
  ]
 
  return (
    <>
    <Navbar/>
    <div className={TohumCSS.mamulWrapperDiv}>
      <Table tableFetchData={data}/>
      <DataEntryComponent refetch={refetch} turArr={tohumTurleri} title={"Tohum"}/>
    </div>
    
    </>
    
  )
}

export default Tohum