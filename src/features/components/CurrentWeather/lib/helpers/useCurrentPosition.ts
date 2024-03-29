import { useAppDispatch } from 'shared/lib'
import { useCallback, useMemo } from 'react'
import { setLocation } from '../../../../model/store/locationSlice'

interface UseCurrentPositionProps {
    coords: {
        latitude: number
        longitude: number
    }
}

export const useCurrentPosition = () => {
    const dispatch = useAppDispatch()
    const options = useMemo(() => {
        return {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        }
    }, [])
    const success = useCallback((position: UseCurrentPositionProps) => {
        if (navigator.geolocation) {
            dispatch(setLocation(`${position.coords.latitude.toString()},${position.coords.longitude.toString()}`))
        }
    }, [dispatch])
    const error = () => {
        throw new Error('Не получается определить вашу геолокацию :(')
    }

    return useCallback(() => {
        try {
            navigator.geolocation.getCurrentPosition(success, error, options)
        } catch (e) {
            console.log(e)
        }
    }, [options, success])
}
