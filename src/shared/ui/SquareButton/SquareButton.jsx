import React from 'react'
import clsx from 'clsx'
import './SquareButton.scss'

const SquareButton = ({ children, theme, onClick }) => {
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

export default SquareButton
