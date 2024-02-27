import { useSelector } from 'react-redux'
import next from '../../../../assets/icons/next.png'
import classes from './CalculatorInput.module.scss'
import { useClearField } from '../../lib/hooks/useClearField'

const CalculatorInput = () => {
    const result = useSelector((state) => state.result.result)
    const clearField = useClearField()

    return (
        <div className={classes.input}>
            <button
                type='button'
                className={classes.input__button}
                onClick={() => clearField()}
            >
                <img
                    src={next}
                    className={classes.input__clear}
                    alt='clear'
                />
            </button>
            <p
                className={classes.input__result}
            >
                {result}
            </p>
        </div>
    )
}

export default CalculatorInput
