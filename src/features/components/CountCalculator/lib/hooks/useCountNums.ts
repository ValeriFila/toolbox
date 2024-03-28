import { useCallback } from 'react'
import { useAppSelector } from 'shared/lib'

export const useCountNums = () => {
    const res = useAppSelector((state) => state.result.result)

    return useCallback((button: string, prev: number) => {
        switch (button) {
            case '+':
                return prev + Number(res)
            case '-':
                return prev - Number(res)
            case 'x':
                return prev * Number(res)
            case '/':
                return prev / Number(res)
            default:
                return 0
        }
    }, [res])
}
