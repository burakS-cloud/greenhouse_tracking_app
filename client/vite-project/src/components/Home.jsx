import React from 'react'
import { useNavigate } from "react-router-dom";
import Weather from './Weather';
import Navbar from './Navbar';
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
// import LineChart from "./LineChart"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

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

    {/* <LineChart chartData={userData}/> */}

    // let saatToPass = Math.floor(data?.tarih / 60);
    // let dakikaToPass = data?.tarih % 60;
    // let tarihToPass = `${saatToPass}:${dakikaToPass}`
          let hour = ""
          let minute = ""
          let finalTime = ""
      if(data) {
          
            if(Math.floor(data?.tarih / 60).toString().length < 2){
              let unprocessedHour = Math.floor(data?.tarih / 60);
              let formattedHour = `0${unprocessedHour}`;
              hour = formattedHour;
            } else {
              hour = Math.floor(data?.tarih / 60).toString();
            }

            if(data?.tarih % 60 < 10){
              let unprocessedMin = data?.tarih % 60;
              let formattedMin = `0${unprocessedMin}`;
              minute = formattedMin;
            } else {
              minute = (data?.tarih % 60).toString();
            }

          finalTime = `${hour}:${minute}`
          console.log("finalTime:", finalTime);
    }
   

  return (
    <>
    <Navbar/>
    {/* <button onClick={() => navigate('/about')}>Go About</button> */}
    <div>
      <div style={{display:'flex', marginTop:'1em', justifyContent:'space-around' }}> 
            <Box
            sx={{
              display: 'flex',
              flexDirection:'column',
              justifyContent:'center',
              flexWrap: 'wrap',
              // border:'1px solid red',
              '& > :not(style)': {
                m: 1,
                width: 200,
                height: 150,
              },
            }}
          >
            <Paper sx={{paddingBottom:'1.5em', background:'lightblue'}} children={<div>
              <p style={{textAlign:'center', fontSize:'2rem'}}>Sıcaklık</p>
              <p style={{textAlign:'center', paddingLeft:0, fontWeight:'bold', fontSize:'3rem', marginTop:'-.3em'}}>{data?.sicaklik}</p>
            </div>} />
            <Paper sx={{paddingBottom:'1.5em', background:'lightblue'}} children={<div>
              <p style={{textAlign:'center', fontSize:'2rem'}}>Su Seviyesi</p>
              <p style={{textAlign:'center', paddingLeft:0, fontWeight:'bold', fontSize:'3rem', marginTop:'-.3em'}}>{data?.suSeviyesi}</p>
            </div>} />
          </Box>  

          <Box
            sx={{
              display: 'flex',
              flexDirection:'column',
              justifyContent:'center',
              flexWrap: 'wrap',
              '& > :not(style)': {
                m: 1,
                width: 200,
                height: 150,
              },
            }}
          >
            <Paper sx={{paddingBottom:'1.5em', background:'lightblue'}} children={<div>
              <p style={{textAlign:'center', fontSize:'2rem'}}>Nem</p>
              <p style={{textAlign:'center', paddingLeft:0, fontWeight:'bold', fontSize:'3rem', marginTop:'-.3em'}}>{data?.nem}</p>
            </div>} />
            <Paper sx={{paddingBottom:'1.5em', background:'lightblue'}} children={<div>
              <p style={{textAlign:'center', fontSize:'2rem'}}>Saat</p>
              <p style={{textAlign:'center', paddingLeft:0, fontWeight:'bold', fontSize:'3rem', marginTop:'-.3em'}}>{finalTime}</p>
            </div>} />
          </Box>

        <Weather/>
      </div>
    </div> 
    </>
  )
}

export default Home