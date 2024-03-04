import './CurrentWeather.scss'
import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useGetCurrentWeatherQuery } from '../api/weatherApi.js'
import { useCurrentPosition } from '../lib/helpers/useCurrentPosition'
import { WeatherBlock } from '../../../../entities/Weather'

export const CurrentWeather = () => {
    const location = useSelector((state) => state.location.location)
    const ref = useRef()

    useCurrentPosition()

    const handleChange = () => {
        console.log('change')
    }

    const fetchTheWeather = () => {
        console.log('fetch the weather...')
        console.log(location)
    }

    const {
        data,
        // isFetching,
        // isLoading,
    } = useGetCurrentWeatherQuery(location)

    return (
        <WeatherBlock
            data={data}
            inputRef={ref}
            onChange={(e) => handleChange(e)}
            onClick={() => fetchTheWeather()}
        />
    )
}
