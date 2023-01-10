import React from 'react'
import TableCSS from './Table.module.css'

const Table = (props) => {

    // const decideWhichTable = () => {
    //     if(props.tableFetchData.length == 0){
    //         return (
    //             <tr>
    //                 <td>Kayıt yok</td>
    //                 <td>Kayıt yok</td>
    //                 <td>Kayıt yok</td>
    //                 <td>Kayıt yok</td>
    //                 <td>Kayıt yok</td>
    //                 <td>Kayıt yok</td>
    //             </tr>
    //         )
    //     }
    // }

    console.log("props in balik:", props.tableFetchData)

     const tableData = [
    "Tarih",
    "Tür",
    "Miktar",
    "Miktar Türü",
    "Fiyat",
    "Toplam Fiyat"
  ]

  return (
    <table>
        <tr>
            {tableData.map((data,i) => <th key={i}>{data}</th>)}
        </tr>
        
       {props?.tableFetchData?.map((veri,i) => (
        <tr key={i}>
            <td>{veri?.alisTarihi ? veri.alisTarihi : "Yok"}</td>
            <td>{veri?.tur ? veri.tur : "Yok"}</td>
            <td>{veri?.miktar ? veri.miktar : "Yok"}</td>
            <td>{veri?.miktarTuru ? veri.miktarTuru : "Yok"}</td>
            <td>{veri?.fiyat ? veri.fiyat : "Yok"}</td>
            <td>{veri?.toplamFiyat ? veri.toplamFiyat : "Yok" }</td>
        </tr>
       ))}     
</table>
  )
}

export default Table