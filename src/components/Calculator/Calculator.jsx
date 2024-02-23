import { useState } from 'react'
import CustomButton from '../ui/CustomButton/CustomButton'
import classes from './Calculator.module.scss'

const Calculator = () => {
    const [result, setResult] = useState('0')
    const [count, setCount] = useState(0)
    const [currentOperator, setCurrentOperator] = useState('')
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
            setCount((prev) => {
                return Number(prev) + Number(result)
            })
            setResult('0')
            setCurrentOperator(button)
        } else if (button === '=') {
            setCount((prev) => {
                return Number(prev) + Number(result)
            })
            setResult(count.toString())
        } else {
            setResult((prev) => {
                if (prev.toString().includes('.') && button === '.') {
                    return prev.toString()
                }

                if ((Number(button) >= '0' && Number(button) <= '9') || button === '.') {
                    if (prev.toString().length >= 10) return prev.toString()

                    if ((prev === '0' || prev === '-0') && button === '0') return prev.toString()

                    if ((prev === '0' || prev === '-0') && button === '.') return `${prev}.`

                    if (prev === '0') return button

                    if (prev === '-0') return `-${button}`

                    return (prev + button).toString()
                }

                if (button === 'AC') {
                    setCount(0)
                    return '0'
                }

                if (button === '[+/-]') {
                    if (prev.toString().startsWith('-')) {
                        return prev.toString().slice(1, prev.toString().length)
                    }
                    return `-${prev.toString()}`
                }

                if (button === '%') {
                    if (prev === '0' || prev === '-0' || prev === '0.' || prev === '-0.') {
                        return '0'
                    }
                    const res = (Number(prev) / 100).toString()
                    if (res.length > 9) {
                        return Number(res).toPrecision(8)
                    }
                    return res
                }
            })
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
