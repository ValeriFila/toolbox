import { useDispatch } from 'react-redux'
import { useCallback, useMemo } from 'react'
import { setLocation } from '../../../../model/store/locationSlice'

export const useCurrentPosition = () => {
    const dispatch = useDispatch()
    const options = useMemo(() => {
        return {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        }
    }, [])
    const success = useCallback((position) => {
        if (navigator.geolocation) {
            dispatch(setLocation(`${position.coords.latitude.toString()},${position.coords.longitude.toString()}`))
        }
    }, [dispatch])
    const error = (err) => {
        throw new Error(err)
    }

    return useCallback(() => {
        navigator.geolocation.getCurrentPosition(success, error, options)
    }, [options, success])
}
