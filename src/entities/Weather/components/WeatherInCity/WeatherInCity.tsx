import React from 'react'
import './WeatherInCity.scss'
import location from 'shared/assets/icons/location.png'

interface WeatherInCityProps {
    data: {
        current: {
            temp_c: number
            condition: {
                icon: string
                text: string
            }
        }
        location: {
            name: string
        }
    }
}

export const WeatherInCity = ({ data }: WeatherInCityProps) => {
    return (
        <div className='weather-in-city'>
            {data ? (
                <>
                    <div className='weather-in-city__location'>
                        <img
                            src={location}
                            alt='location icon'
                            className='weather-in-city__location__icon'
                        />
                        <p>
                            {data.location.name}
                        </p>
                    </div>
                    <div className='weather-in-city__result'>
                        <div className='weather-in-city__result__temperature'>
                            <p className='weather-in-city__result__temperature__text'>
                                {data.current.temp_c}
                                °c
                            </p>
                            <img
                                src={data.current.condition.icon}
                                alt='current weather icon'
                                className='weather-in-city__result__icon'
                            />
                        </div>
                        <p className='weather-in-city__result__temperature__description'>
                            {data.current.condition.text}
                        </p>
                    </div>
                </>
            ) : (
                <div className='weather-block__result-section'>
                    <p>Загрузка...</p>
                </div>
            )}
        </div>
    )
}
