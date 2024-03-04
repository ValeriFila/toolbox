import { useDispatch } from 'react-redux'
import { setLocation } from '../../../../model/store/locationSlice'

export const useCurrentPosition = () => {
    const dispatch = useDispatch()
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    }
    const success = (position) => {
        if (navigator.geolocation) {
            dispatch(setLocation(`${position.coords.latitude.toString()},${position.coords.longitude.toString()}`))
        }
    }
    const error = (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`)
    }

    navigator.geolocation.getCurrentPosition(success, error, options)
}
