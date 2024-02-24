import { useCallback, useState } from 'react'
import CustomButton from '../ui/CustomButton/CustomButton'
import classes from './Calculator.module.scss'
import displayResult from '../../utils/displayResult'
import countNums from '../../utils/countNums'
import CalculatorInput from '../CalculatorInput/CalculatorInput'
import clearField from '../../utils/clearField'

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
    const [result, setResult] = useState('0')
    const [count, setCount] = useState(0)
    const [operatorPressed, setOperatorPressed] = useState(false)
    const [isFirstOperator, setIsFirstOperator] = useState(false)
    const [equalPressed, setEqualPressed] = useState(false)
    const [lastOperator, setLastOperator] = useState('')

    const numberClick = useCallback((button) => {
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
                        return Number(countNums(lastOperator, prev, result))
                    })
                    setEqualPressed(false)
                }
            }
            setOperatorPressed(true)
        } else if (button === '=') {
            setCount((prev) => {
                return Number(countNums(lastOperator, prev, result))
            })
            setEqualPressed(true)
            setOperatorPressed(false)
        } else if (!operatorPressed) {
            displayResult(
                button, 
                false, 
                setResult, 
                setCount, 
                setOperatorPressed, 
                setIsFirstOperator, 
                setEqualPressed, 
                setLastOperator,
            )
        } else {
            displayResult(
                button, 
                true, 
                setResult, 
                setCount, 
                setOperatorPressed, 
                setIsFirstOperator, 
                setEqualPressed, 
                setLastOperator,
            )
            setOperatorPressed(false)
        }
    }, [equalPressed, isFirstOperator, lastOperator, operatorPressed, result])

    return (
        <div className={classes.calculator__body}>
            <CalculatorInput
                result={result}
                onClick={() => clearField(result, setResult())}
            />
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
                    {count}
                </p>
            )}
        </div>
    )
}

export default Calculator
