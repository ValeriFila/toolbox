import next from 'shared/assets/icons/next.png'
import './CalculatorInput.scss'

interface CalculatorInputProps {
    onClickClear: () => void
    result: string
}

export const CalculatorInput = (props: CalculatorInputProps) => {
    const {
        onClickClear,
        result,
    } = props

    return (
        <div className='input'>
            <button
                type='button'
                className='input__button'
                onClick={() => onClickClear()}
            >
                <img
                    src={next}
                    className='input__clear'
                    alt='clear'
                />
            </button>
            <p
                className='input__result'
            >
                {result}
            </p>
        </div>
    )
}
