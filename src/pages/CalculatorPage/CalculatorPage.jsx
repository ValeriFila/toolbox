import React from 'react'
import Calculator from '../../components/Calculator/Calculator'
import classes from './CalculatorPage.module.scss'

const CalculatorPage = () => {
    return (
        <div className={classes.page}>
            <Calculator />
        </div>
    )
}

export default CalculatorPage
