import React from 'react'
import './CalculatorBody.scss'
import { SquareButton } from 'shared/ui'

interface CalculatorBodyProps {
    onClickButton: (b: string) => void
    result: number
}

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

export const CalculatorBody = (props: CalculatorBodyProps) => {
    const {
        onClickButton,
        result,
    } = props

    return (
        <div className='calculator__body'>
            <div className='calculator__body__calculator'>
                {buttons.map((button) => (
                    <SquareButton
                        key={button}
                        theme={button === '0' ? 'calc-btn--big' : 'calc-btn'}
                        onClick={() => onClickButton(button)}
                    >
                        <p className='calculator__body__calculator__text'>{button}</p>
                    </SquareButton>
                ))}
            </div>
            {result.toString().length > 9 ? (
                <p
                    className='calculator__body__calculator__count'
                >
                    {result.toExponential(3)}
                </p>
            ) : (
                <p
                    className='calculator__body__calculator__count'
                >
                    {result.toString()}
                </p>
            )}
        </div>
    )
}
