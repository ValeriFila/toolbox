import React from 'react'
import './WeatherInCity.scss'

export const WeatherInCity = ({ data }) => {
    return (
        <div className='weather-in-city'>
            {data ? (
                <div>
                    <p>
                        {data.location.name}
                        ,
                        <br />
                        {data.location.country}
                    </p>
                    <div className='weather-in-city__result'>
                        <img
                            src={data.current.condition.icon}
                            alt='current weather icon'
                            className='weather-in-city__result__icon'
                        />
                        <p>
                            {data.current.temp_c}
                            °C
                        </p>
                    </div>
                </div>
            ) : (
                <div className='weather-block__result-section'>
                    <p>Загрузка...</p>
                </div>
            )}
        </div>
    )
}
