import next from '../../../../shared/assets/icons/next.png'
import classes from './CalculatorInput.module.scss'

export const CalculatorInput = ({ onClickClear, result }) => {
    return (
        <div className={classes.input}>
            <button
                type='button'
                className={classes.input__button}
                onClick={() => onClickClear()}
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
