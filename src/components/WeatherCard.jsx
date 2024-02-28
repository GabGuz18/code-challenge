import React from 'react'
import '@/app/styles.css'

export const WeatherCard = ({date, tempMin, tempMax}) => {

  return (
    <div className='card'>
			<h3>{ date.split(' ')[0] }</h3>
			<h4>Max: { tempMax }°C</h4>
			<h4>Min: { tempMin }°C</h4>
    </div>
  )
}
