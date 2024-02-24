import { useState } from 'react'
import CustomButton from '../ui/CustomButton/CustomButton'
import classes from './Calculator.module.scss'
import displayResult from '../../utils/displayResult'

const Calculator = () => {
    const [result, setResult] = useState('0')
    const [count, setCount] = useState(0)
    const [operatorPressed, setOperatorPressed] = useState(false)
    const [isFirstOperator, setIsFirstOperator] = useState(false)
    const [equalPressed, setEqualPressed] = useState(false)
    const [countPressedOperators, setCountPressedOperators] = useState(0)

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

    function numberClick(button) {
        if (button === '-' || button === '+' || button === '/' || button === 'x') {
            if (!isFirstOperator) {
                setCount(Number(result))
                setIsFirstOperator(true)
            } else if (!operatorPressed) {
                if (equalPressed) {
                    setEqualPressed(false)
                } else {
                    setCount((prev) => {
                        return Number(prev) + Number(result)
                    })
                    setEqualPressed(false)
                }
            }

            setOperatorPressed(true)
        } else if (button === '=') {
            setCount((prev) => {
                return Number(prev) + Number(result)
            })
            setOperatorPressed(false)
            setEqualPressed(true)
        } else if (!operatorPressed) {
            displayResult(button, false, setResult, setCount)
        } else {
            displayResult(button, true, setResult, setCount)
            setOperatorPressed(false)
        }
    }

    return (
        <div className={classes.calculator__body}>
            <p
                className={classes.calculator__body__calculator__result}
                style={{ fontSize: result.toString().length > 10 ? '3.5rem' : '4.8rem' }}
            >
                {result}
            </p>
            <div className={classes.calculator__body__calculator}>
                {buttons.map((button) => (
                    <CustomButton
                        key={button}
                        theme={button === '0' ? 'calc-btn--big' : 'calc-btn'}
                        onClick={() => numberClick(button)}
                    >
                        <p className={classes.calculator__body__calculator__text}>{button}</p>
                    </CustomButton>
                ))}
            </div>

            <p style={{ fontSize: '40px', marginTop: '20px', color: 'white' }}>{count}</p>
        </div>
    )
}

export default Calculator
