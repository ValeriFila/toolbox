import React, { ReactNode } from 'react'
import clsx from 'clsx'
import './SquareButton.scss'

interface SquareButtonProps {
    children: ReactNode
    theme?: string
    onClick?: () => void
}

export const SquareButton = (props: SquareButtonProps) => {
    const {
        children,
        theme,
        onClick,
    } = props

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
