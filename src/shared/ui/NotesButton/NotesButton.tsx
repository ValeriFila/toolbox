import './NotesButton.scss'
import { FC } from 'react'

interface Button {
    onClick: () => void;
    title: string
}

export const NotesButton: FC<Button> = ({ onClick, title }) => {
    return (
        <button
            type='button'
            className='notes-button'
            onClick={onClick}
        >
            {title}
        </button>
    )
}
