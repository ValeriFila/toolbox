import React from 'react'
import { Calculator } from '../../widgets'
import classes from './CalculatorPage.module.scss'

export const CalculatorPage = () => {
    return (
        <div className={classes.page}>
            <Calculator />
        </div>
    )
}
