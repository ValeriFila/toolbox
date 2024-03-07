import './CurrentWeather.scss'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useGetCurrentWeatherQuery } from '../api/weatherApi.js'
import { useCurrentPosition } from '../lib/helpers/useCurrentPosition'
import { WeatherInCity } from '../../../../entities/Weather'

export const CurrentWeather = () => {
    const location = useSelector((state) => state.location.location)

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
