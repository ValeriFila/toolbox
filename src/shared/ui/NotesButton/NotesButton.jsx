import './NotesButton.scss'

export const NotesButton = ({ onClick, title }) => {
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
