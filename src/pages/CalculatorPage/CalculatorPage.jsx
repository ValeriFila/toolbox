import React from 'react'
import Calculator from '../../components/Calculator/Calculator'
import classes from './CalculatorPage.module.scss'
import CalculatorInput from '../../entities/Calculator/components/resultInput/CalculatorInput'

const CalculatorPage = () => {
    return (
        <div className={classes.page}>
            <CalculatorInput />
            <Calculator />
        </div>
    )
}

export default CalculatorPage
