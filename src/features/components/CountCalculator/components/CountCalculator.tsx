import { useCallback, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'shared/lib'
import { CalculatorBody } from 'entities/Calculator'
import { useCountNums } from 'features/components/CountCalculator/lib/hooks/useCountNums.ts'
import { useDisplayResult } from 'features/components/CountCalculator/lib/hooks/useDisplayResult.ts'
import { setResult } from '../../../model/store/resultSlice'

export const CountCalculator = () => {
    const result = useAppSelector((state) => state.result.result)
    const dispatch = useAppDispatch()
    const [count, setCount] = useState(0)
    const [operatorPressed, setOperatorPressed] = useState(false)
    const [isFirstOperator, setIsFirstOperator] = useState(false)
    const [equalPressed, setEqualPressed] = useState(false)
    const [lastOperator, setLastOperator] = useState('')
    const countNums = useCountNums()
    const displayResult = useDisplayResult()

    const numberClick = useCallback((button: string) => {
        const params = {
            button,
            setCount,
            setOperatorPressed,
            setIsFirstOperator,
            setEqualPressed,
            setLastOperator,
        }
        if (button === '-' || button === '+' || button === '/' || button === 'x') {
            setLastOperator(button)
            if (!isFirstOperator) {
                setCount(Number(result))
                setIsFirstOperator(true)
            } else if (!operatorPressed) {
                if (equalPressed) {
                    setEqualPressed(false)
                } else {
                    setCount((prev) => {
                        return Number(countNums(lastOperator, prev))
                    })
                    setEqualPressed(false)
                }
            }
            setOperatorPressed(true)
        } else if (button === '=') {
            setCount((prev) => {
                return Number(countNums(lastOperator, prev))
            })
            setEqualPressed(true)
            setOperatorPressed(false)
        } else if (!operatorPressed) {
            const res = displayResult(params, false)
            dispatch(setResult(res))
        } else {
            const res = displayResult(params, true)
            dispatch(setResult(res))
            setOperatorPressed(false)
        }
    }, [
        countNums,
        dispatch,
        displayResult,
        equalPressed,
        isFirstOperator,
        lastOperator,
        operatorPressed,
        result])

    return (
        <CalculatorBody
            onClickButton={numberClick}
            result={count}
        />
    )
}
