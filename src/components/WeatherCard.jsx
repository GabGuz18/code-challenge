import React from 'react'
import '@/app/styles.css'

export const WeatherCard = ({date, temp}) => {

  return (
    <div className='card'>
			<h3>{ date.split(' ')[0] }</h3>
			<h4>{ temp }°C</h4>
    </div>
  )
}
