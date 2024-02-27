import { useCallback } from 'react'
import { useSelector } from 'react-redux'

export const useCountNums = () => {
    const res = useSelector((state) => state.result.result)

    return useCallback((button, prev) => {
        switch (button) {
            case '+':
                return Number(prev) + Number(res)
            case '-':
                return Number(prev) - Number(res)
            case 'x':
                return Number(prev) * Number(res)
            case '/':
                return Number(prev) / Number(res)
            default:
                return 0
        }
    }, [res])
}
