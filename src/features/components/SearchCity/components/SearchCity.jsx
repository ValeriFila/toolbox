import { useMemo, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { SearchingCityBlock } from '../../../../entities/Weather'
import { useFetchCityMutation } from '../api/cityApi'
import './SearchCity.scss'

export const SearchCity = () => {
    const location = useSelector((state) => state.location.location)
    const [queryRes, setQueryRes] = useState(null)
    const ref = useRef('')
    const fetchTheWeather = () => {
        console.log('fetch the weather...')
        console.log(location)
    }
    const [fetchCity, result] = useFetchCityMutation()
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
            return null
        }
        const citiesArray = queryRes?.suggestions.reduce((accum, city) => {
            return [...accum, city.data.city]
        }, [])
        const uniqueCities = new Set([...citiesArray])
        const uniqueCitiesArray = [...uniqueCities]

        return uniqueCitiesArray.map((city) => {
            if (city) {
                return (
                    <p className='search-city__cities__city'>{city}</p>
                )
            }
            return null
        })
    }, [queryRes])
    
    return (
        <div className='search-city'>
            <SearchingCityBlock
                inputRef={ref}
                onChange={(e) => handleChange(e)}
                onClick={() => fetchTheWeather()}
            />
            <div className='search-city__cities'>
                {createdCitiesList}
            </div>
        </div>
    )
}
