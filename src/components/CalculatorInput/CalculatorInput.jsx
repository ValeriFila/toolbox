import next from '../../assets/icons/next.png'
import classes from './CalculatorInput.module.scss'

const CalculatorInput = ({ result, onClick }) => {
    return (
        <div className={classes.input}>
            <button
                type='button'
                className={classes.input__button}
                onClick={onClick}
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
