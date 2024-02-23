import React from 'react'
import clsx from 'clsx'
import './CustomButton.scss'

const CustomButton = ({ children, theme, onClick }) => {
    return (
        <button
            type='button'
            className={clsx('button', theme && `button--${theme}`)}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default CustomButton
