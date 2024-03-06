import './CurrentWeather.scss'
import { useSelector } from 'react-redux'
import { useGetCurrentWeatherQuery } from '../api/weatherApi.js'
import { useCurrentPosition } from '../lib/helpers/useCurrentPosition'
import { WeatherInCity } from '../../../../entities/Weather'

export const CurrentWeather = () => {
    const location = useSelector((state) => state.location.location)

    // useCurrentPosition()

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
