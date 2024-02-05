import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Weather.css';

export default function Weather() {

  const [weather, setWeather] = useState("");

  useEffect(()=>{
    async function getWeather() {
      try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Busan&appid=2b6566e3917c241ac9d0ff5e5526430d&lang=kr');
        console.log(response);
        console.log(response.data.weather[0].main);
        setWeather(response.data.weather[0].description);
      } catch (error) {
        console.error(error);
      }
    }
    getWeather();
  }, []);

  return (
      <p>오늘의 날씨 <span className='weather-text'>{weather}</span></p>
  )
}