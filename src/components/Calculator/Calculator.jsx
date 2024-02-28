import React, { useCallback, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SquareButton } from '../../shared/ui'
import classes from './Calculator.module.scss'
import { useCountNums } from '../../entities/Calculator/lib/hooks/useCountNums'
import { useDisplayResult } from '../../entities/Calculator/lib/hooks/useDisplayResult'
import { setResult } from '../../app/store/resultSlice'

const buttons = [
    'AC',
    '[+/-]',
    '%',
    '/',
    '7',
    '8',
    '9',
    'x',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '0',
    '.',
    '=',
]

const Calculator = () => {
    const result = useSelector((state) => state.result.result)
    const dispatch = useDispatch()
    const [count, setCount] = useState(0)
    const [operatorPressed, setOperatorPressed] = useState(false)
    const [isFirstOperator, setIsFirstOperator] = useState(false)
    const [equalPressed, setEqualPressed] = useState(false)
    const [lastOperator, setLastOperator] = useState('')
    const countNums = useCountNums()
    const displayResult = useDisplayResult()

    const numberClick = useCallback((button) => {
        const params = [
            button,
            setCount,
            setOperatorPressed,
            setIsFirstOperator,
            setEqualPressed,
            setLastOperator,
        ]
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
            const res = displayResult(...params, false)
            dispatch(setResult(res))
        } else {
            const res = displayResult(...params, true)
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
        <div className={classes.calculator__body}>
            <div className={classes.calculator__body__calculator}>
                {buttons.map((button) => (
                    <SquareButton
                        key={button}
                        theme={button === '0' ? 'calc-btn--big' : 'calc-btn'}
                        onClick={() => numberClick(button)}
                    >
                        <p className={classes.calculator__body__calculator__text}>{button}</p>
                    </SquareButton>
                ))}
            </div>
            {count.toString().length > 9 ? (
                <p
                    className={classes.calculator__body__calculator__count}
                >
                    {count.toExponential(3)}
                </p>
            ) : (
                <p
                    className={classes.calculator__body__calculator__count}
                >
                    {count.toString()}
                </p>
            )}
        </div>
    )
}

export default Calculator
