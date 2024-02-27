"use client"
import React, { useState } from 'react'
import './styles.css'
import { WeatherCard } from '@/components/WeatherCard'

const apiKey = "0eebd1fcf852d29ca0340c5c451d4c9a"

const page = () => {

  const [City, setCity] = useState('');
  const [Weather, setWeather] = useState([]);

  const fetchWeather = async () => {

    setCity('')
    setWeather([])

    try {
      const res = await fetch(`https://search.reservamos.mx/api/v2/places?q=${City}`);
      const data = await res.json();

      if (data.length > 0) {
        const { lat, long } = data[0];
        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`);
        const weatherData = await weatherResponse.json();
        const array = weatherData.list
        for(let i=0;i<array.length;i+=8){
          setWeather(prev=>[...prev, array[i]]);
        }
      } else {
        setWeather(null);
        console.log('City not found');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='container'>
      <h1>Weather App</h1>
      <div className='form'>
        <input type="text" placeholder='City' value={City} onChange={(e) => setCity(e.target.value)}/>
        <button onClick={fetchWeather}>Search</button>
      </div>
      <h2>{City}</h2>
      <div className='cards'>
        {
          Weather.length > 0 && Weather.map((temp) => {
            return (
              <div key={temp.dt}>
                <WeatherCard date={temp.dt_txt} temp={temp.main.temp} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default page