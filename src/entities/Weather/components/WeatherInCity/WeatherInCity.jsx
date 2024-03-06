import React from 'react'
import './WeatherInCity.scss'

export const WeatherInCity = ({ data }) => {
    return (
        <div className='weather-in-city'>
            {data ? (
                <div>
                    <p>{data.location.name}</p>
                    <p>
                        {data.current.temp_c}
                        °C
                    </p>
                </div>
            ) : (
                <div className='weather-block__result-section'>
                    <p>Загрузка...</p>
                </div>
            )}
        </div>
    )
}
