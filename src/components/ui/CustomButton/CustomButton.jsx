import React from 'react'
import classes from './CustomButton.module.scss'

const CustomButton = () => {
    return (
        <button
            type='button'
            className={classes.customButton}
        >
            нажать
        </button>
    )
}

export default CustomButton
