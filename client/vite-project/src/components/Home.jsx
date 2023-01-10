import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Weather from './Weather';
import Navbar from './Navbar';
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import LineChart from "./LineChart"

const Home = () => {
    let navigate = useNavigate();

     const { data, refetch, error } = useQuery(["data"], () => {
      return axios.get(`http://localhost:4000/api/data`)
        .then((res) => res.data)
      }, {
        refetchInterval: 10000,
        onError: () => setRefetchInterval(0)
      });

      // let timesArr = [];
      // for(let i = 0; i <data?.length; i++) {
      //   let hour = Math.floor(data[i].tarih / 60);
      //   let min = data[i] % 60;
      //   let finalTimes = `${hour}:${min}`
      //   timesArr.push(finalTimes)
      // }
      

  //     const [userData, setUserData] = useState({
  //   labels: data?.map((veri) => veri?.tarih),
  //   datasets: [
  //     {
  //       label: "Users Gained",
  //       data: data?.map((veri) => veri.userGain),
  //       backgroundColor: [
  //         "rgba(75,192,192,1)",
  //         "#ecf0f1",
  //         "#50AF95",
  //         "#f3ba2f",
  //         "#2a71d0",
  //       ],
  //       borderColor: "black",
  //       borderWidth: 2,
  //     },
  //     {
  //       label: "Users Lost",
  //       data: data?.map((veri) => veri.userLost),
  //       backgroundColor: [
  //         "rgba(75,192,192,1)",
  //         "#ecf0f1",
  //         "#50AF95",
  //         "#f3ba2f",
  //         "#2a71d0",
  //       ],
  //       borderColor: "black",
  //       borderWidth: 2,
  //     },
  //   ],
  // });

      console.log("data coming from backend:", data);
    //  let interval = setInterval(() => {
    //     refetch();
    //     console.log("inside interval")
    //  }, 10000);

  return (
    <>
    <Navbar/>
    {/* <button onClick={() => navigate('/about')}>Go About</button> */}
    <div>
      <div style={{display:'flex', marginTop:'1em', justifyContent:'flex-end' }}>
        {/* <LineChart chartData={userData}/> */}
        <Weather/>
      </div>
    </div> 
    </>
  )
}

export default Home