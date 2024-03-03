import './CurrentWeather.scss'
import { useGetCurrentWeatherQuery } from '../api/weatherApi.js'

export const CurrentWeather = () => {
    const {
        data,
        isFetching,
        isLoading,
    } = useGetCurrentWeatherQuery('London', 7)
    console.log(data, isFetching, isLoading)

    return (
        <p>Here is weather...</p>
    )
}
