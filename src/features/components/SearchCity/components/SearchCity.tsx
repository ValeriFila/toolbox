import React, { useCallback, useMemo, useRef, useState } from 'react'
import { useAppDispatch, useDebounce } from 'shared/lib'
import { SearchingCityBlock } from 'entities/Weather'
import { useFetchCityMutation } from 'features/components/SearchCity/api/cityApi.ts'
import { setLocation } from '../../../model/store/locationSlice'
import './SearchCity.scss'

interface QueriedCities {
    data: {
        city: string
    }
}

export const SearchCity = () => {
    const dispatch = useAppDispatch()
    const [queryRes, setQueryRes] = useState<QueriedCities[]>([])
    const ref = useRef<HTMLInputElement>(null)
    const [fetchCity, result] = useFetchCityMutation()

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (ref.current) {
            ref.current.value = e.target.value
            await fetchCity(ref.current.value).unwrap()
        }
        if (e.target.value.trim().length === 0) {
            setQueryRes([])
        } else {
            setQueryRes(result.data?.suggestions)
        }
    }

    const findCity = useDebounce((e: React.ChangeEvent<HTMLInputElement>) => handleChange(e), 300)

    const changeLocation = useCallback((city: string) => {
        if (ref.current) {
            ref.current.value = ''
        }
        setQueryRes([])
        dispatch(setLocation(city))
    }, [dispatch])

    const createdCitiesList = useMemo(() => {
        if (!queryRes) {
            return null
        }
        const citiesArray: string[] = queryRes.reduce((accum: string[], city: QueriedCities) => {
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
                onChange={(e) => findCity(e)}
            />
            <div className='search-city__cities'>
                {createdCitiesList}
            </div>
        </div>
    )
}
