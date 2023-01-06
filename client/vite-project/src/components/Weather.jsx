import React from 'react'
import ReactWeather, { useOpenWeather } from 'react-open-weather';
import { useState, useImperativeHandle } from 'react';
import { useLocation } from "react-router-dom"
import Navbar from "../components/Navbar"

const Weather = () => {

    //useImperativeHandle ile burda user'ın seçtiği şehri,
    // yani state variable'ı Home.jsx'e paslamayı dene

    const location = useLocation();
    // console.log("location inside weather Comp:", location);
    const pathname = location.pathname;


    const { data, isLoading, errorMessage } = useOpenWeather({
        key: '00d06216f715fca4dfe7305bc2f7e0e5',
        lat: '40.193298',
        lon: '29.074202',
        lang: 'tr',
        unit: 'metric', // values are (metric, standard, imperial)
      });

      const customStyles = {
        fontFamily:  'Helvetica, sans-serif',
        gradientStart:  '#702697',
        gradientMid:  '#04A7F9',
        gradientEnd:  '#702697',
        locationFontColor:  '#FFF',
        todayTempFontColor:  '#FFF',
        todayDateFontColor:  '#B5DEF4',
        todayRangeFontColor:  '#B5DEF4',
        todayDescFontColor:  '#B5DEF4',
        todayInfoFontColor:  '#B5DEF4',
        todayIconColor:  '#FFF',
        forecastBackgroundColor:  '#E2E2E2',
        forecastSeparatorColor:  '#DDD',
        forecastDateColor:  '#777',
        forecastDescColor:  '#777',
        forecastRangeColor:  '#777',
        forecastIconColor:  '#4BC4F7',
        // boxShadow: "0px 15px 10px -15px #111"
    };

  return (
    <>
    {pathname === '/weather' ? <Navbar/> : ""}
    
    <div style={{marginTop:'1em'}}>
    <ReactWeather     
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="tr"
      locationLabel="Bursa"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
      theme={customStyles}
    //   style={{boxShadow: "0 4px 2px -2px gray"}}
    />
    </div>
    </>
  )
}

export default Weather