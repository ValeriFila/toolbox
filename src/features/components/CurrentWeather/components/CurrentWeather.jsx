import './CurrentWeather.scss'
import { useMemo, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useGetCurrentWeatherQuery } from '../api/weatherApi.js'
import { useCurrentPosition } from '../lib/helpers/useCurrentPosition'
import { WeatherBlock } from '../../../../entities/Weather'
import { useFetchCityMutation } from '../api/cityApi.js'

export const CurrentWeather = () => {
    const [queryRes, setQueryRes] = useState(null)
    const location = useSelector((state) => state.location.location)
    const ref = useRef('')

    useCurrentPosition()

    const [fetchCity, result] = useFetchCityMutation()
    const {
        data,
        // isFetching,
        // isLoading,
    } = useGetCurrentWeatherQuery(location)
    const fetchTheWeather = () => {
        console.log('fetch the weather...')
        console.log(location)
    }
    const handleChange = (e) => {
        ref.current.value = e.target.value.trim()
        fetchCity(ref.current.value)
        if (e.target.value.trim().length === 0) {
            setQueryRes(null)
        } else {
            setQueryRes(result.data)
        }
    }

    const createdCitiesList = useMemo(() => {
        if (!queryRes) {
            return (
                <p>Такого города не найдено</p>
            )
        } 
        const citiesArray = queryRes?.suggestions.reduce((accum, city) => {
            return [...accum, city.data.city]
        }, [])
        const uniqueCities = new Set([...citiesArray])
        const uniqueCitiesArray = [...uniqueCities]

        return uniqueCitiesArray.map((city) => {
            return (
                <p className='current-weather__cities__city'>{city}</p>
            )
        })
    }, [queryRes])

    return (
        <div className='current-weather'>
            <WeatherBlock
                data={data}
                inputRef={ref}
                onChange={(e) => handleChange(e)}
                onClick={() => fetchTheWeather()}
            />
            <div className='current-weather__cities'>
                {createdCitiesList}
            </div>
        </div>
    )
}
