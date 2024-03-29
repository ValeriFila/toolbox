import './CurrentWeather.scss'
import { useAppSelector } from 'shared/lib'
import { useEffect } from 'react'
import { WeatherInCity } from 'entities/Weather'
import { useGetCurrentWeatherQuery } from 'features/components/CurrentWeather/api/weatherApi.ts'
import { useCurrentPosition } from 'features/components/CurrentWeather/lib/helpers/useCurrentPosition.ts'

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
