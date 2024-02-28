import React from 'react'
import clsx from 'clsx'
import './SquareButton.scss'

export const SquareButton = ({ children, theme, onClick }) => {
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
