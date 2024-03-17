import './NotesButton.scss'

interface NotesButtonProps {
    onClick: () => void;
    title: string
}

export const NotesButton = ({ onClick, title }: NotesButtonProps) => {
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
