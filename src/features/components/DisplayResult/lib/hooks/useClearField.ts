import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from 'shared/lib'
import { setResult } from '../../../../model/store/resultSlice'

export const useClearField = () => {
    const result = useAppSelector((state) => state.result.result)
    const dispatch = useAppDispatch()
    
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
