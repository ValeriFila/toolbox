import './CurrentWeather.scss'
import { useRef } from 'react'
import { useGetCurrentWeatherQuery } from '../api/weatherApi.js'
import { useCurrentPosition } from '../../../../shared/lib'
import { WeatherBlock } from '../../../../entities/Weather'

export const CurrentWeather = () => {
    const ref = useRef()
    const handleChange = () => {
        console.log('change')
    }

    const fetchTheWeather = () => {
        console.log('fetch the weather...')
    }
    const location = useCurrentPosition().join(',')
    // console.log('location', location)

    const {
        data,
        // isFetching,
        // isLoading,
    } = useGetCurrentWeatherQuery(location, 7)

    return (
        <WeatherBlock
            data={data}
            inputRef={ref}
            onChange={(e) => handleChange(e)}
            onClick={() => fetchTheWeather()}
        />
    )
}
