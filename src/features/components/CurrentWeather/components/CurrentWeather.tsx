import './CurrentWeather.scss'
import { useAppSelector } from 'shared/lib'
import { useEffect } from 'react'
import { WeatherInCity } from 'entities/Weather'
import { useGetCurrentWeatherQuery } from '../api/weatherApi.js'
import { useCurrentPosition } from '../lib/helpers/useCurrentPosition'

export const CurrentWeather = () => {
    const location = useAppSelector((state) => state.location.location)

    const position = useCurrentPosition()
    useEffect(() => {
        position()
    }, [])

    const {
        data,
        // isFetching,
        // isLoading,
    } = useGetCurrentWeatherQuery(location)

    return (
        <div className='current-weather'>
            <WeatherInCity
                data={data}
            />
        </div>
    )
}
