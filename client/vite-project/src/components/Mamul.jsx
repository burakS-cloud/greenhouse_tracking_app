import React from 'react'
import DataEntryComponent from './DataEntryComponent'
import MamulCSS from './Document.module.css'
import Navbar from './Navbar'
import Table from './Table'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const Mamul = () => {

  const { data, refetch } = useQuery(["mamul"], () => {
   return axios.get(`http://localhost:4000/api/mamul`)
    .then((res) => res.data)
  });

  console.log("data fetch in mamul:", data);

   const mamulTurleri = [
    "Tür Seçiniz",
     "Marul",
     "Kereviz",
     "Hindibağ",
     "Maydanoz"
  ]

  return (
    <>
    <Navbar/>
    <div className={MamulCSS.mamulWrapperDiv}>
    <Table tableFetchData={data}/>
    <DataEntryComponent refetch={refetch} turArr={mamulTurleri} title={"Mamül"}/>
    </div>
    </>
  )
}

export default Mamul