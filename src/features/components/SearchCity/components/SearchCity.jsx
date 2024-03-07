import { useCallback, useMemo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SearchingCityBlock } from '../../../../entities/Weather'
import { useFetchCityMutation } from '../api/cityApi'
import { setLocation } from '../../../model/store/locationSlice'
import './SearchCity.scss'

export const SearchCity = () => {
    const dispatch = useDispatch()
    const [queryRes, setQueryRes] = useState(null)
    const ref = useRef()
    const [fetchCity, result] = useFetchCityMutation()
    const handleChange = (e) => {
        ref.current.value = e.target.value
        fetchCity(ref.current.value)
        if (e.target.value.trim().length === 0) {
            setQueryRes(null)
        } else {
            setQueryRes(result.data?.suggestions)
        }
    }

    const changeLocation = useCallback((city) => {
        ref.current.value = ''
        setQueryRes(null)
        dispatch(setLocation(city))
    }, [dispatch])

    const createdCitiesList = useMemo(() => {
        if (!queryRes) {
            return null
        }
        const citiesArray = queryRes.reduce((accum, city) => {
            return [...accum, city.data.city]
        }, [])
        const uniqueCities = new Set([...citiesArray])
        const uniqueCitiesArray = [...uniqueCities]

        return uniqueCitiesArray.map((city) => {
            if (city) {
                return (
                    <p
                        key={city}
                        className='search-city__cities__city'
                        onClick={() => changeLocation(city)}
                    >
                        {city}
                    </p>
                )
            }
            return null
        })
    }, [changeLocation, queryRes])

    return (
        <div className='search-city'>
            <SearchingCityBlock
                inputRef={ref}
                onChange={(e) => handleChange(e)}
            />
            <div className='search-city__cities'>
                {createdCitiesList}
            </div>
        </div>
    )
}
