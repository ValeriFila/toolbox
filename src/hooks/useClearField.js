import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setResult } from '../store/resultSlice'

export const useClearField = () => {
    const result = useSelector((state) => state.result.result)
    const dispatch = useDispatch()
    
    return useCallback(() => {
        if (result !== '0' && result !== '-0') {
            const res = result.slice(0, result.length - 1)
            dispatch(setResult(res))
        }
        if (result.length === 1 || (result.length === 2 && result.startsWith('-'))) {
            dispatch(setResult('0'))
        }
    }, [dispatch, result])
}
