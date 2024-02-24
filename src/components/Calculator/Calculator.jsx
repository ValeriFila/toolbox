import { useCallback, useState } from 'react'
import CustomButton from '../ui/CustomButton/CustomButton'
import classes from './Calculator.module.scss'
import displayResult from '../../utils/displayResult'
import countNums from '../../utils/countNums'

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
    
    // const [operator, setOperator] = useState({
    //     operatorPressed: false,
    //     isFirstOperator: false,
    //     equalPressed: false,
    //     lastOperator: '',
    // })

    const numberClick = useCallback((button) => {
        // console.log(operator)
        if (button === '-' || button === '+' || button === '/' || button === 'x') {
            setLastOperator(button)
            // setOperator({ ...operator, lastOperator: button })
            if (!isFirstOperator) {
                setCount(Number(result))
                // setOperator({ ...operator, isFirstOperator: true })
                setIsFirstOperator(true)
            } else if (!operatorPressed) {
                if (equalPressed) {
                    setEqualPressed(false)
                    // setOperator({ ...operator, equalPressed: false })
                } else {
                    setCount((prev) => {
                        return Number(countNums(lastOperator, prev, result))
                    })
                    // setOperator({ ...operator, equalPressed: false })
                    setEqualPressed(false)
                }
            }
            // setOperator({ ...operator, operatorPressed: true })
            setOperatorPressed(true)
        } else if (button === '=') {
            setCount((prev) => {
                return Number(countNums(lastOperator, prev, result))
            })
            // setOperator({ ...operator, operatorPressed: false, equalPressed: true })
            setEqualPressed(true)
        } else if (!operatorPressed) {
            displayResult(button, false, setResult, setCount, setOperatorPressed, setIsFirstOperator, setEqualPressed, setLastOperator)
        } else {
            displayResult(button, true, setResult, setCount, setOperatorPressed, setIsFirstOperator, setEqualPressed, setLastOperator)
            // setOperator({ ...operator, operatorPressed: false })
            setOperatorPressed(false)
        }
    }, [equalPressed, isFirstOperator, lastOperator, operatorPressed, result])

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

            <p style={{ fontSize: '50px', marginTop: '30px', color: 'white' }}>{count}</p>
        </div>
    )
}

export default Calculator
