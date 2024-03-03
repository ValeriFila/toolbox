import { useMemo } from 'react'

export const useCurrentPosition = (() => {
    return useMemo(() => {
        const result = []
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        }
        const success = async (position) => {
            result.push(position.coords.latitude)
            result.push(position.coords.longitude)
        }
        const error = (err) => {
            console.warn(`ERROR(${err.code}): ${err.message}`)
        }

        navigator.geolocation.getCurrentPosition(success, error, options)

        return result
    }, [])
})
