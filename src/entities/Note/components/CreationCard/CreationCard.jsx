import './CreationCard.scss'
import { NotesButton } from '../../../../shared/ui'

export const CreationCard = ({ props, onClick, onChange, value }) => {
    return (
        <div className='create-note'>
            <textarea
                placeholder='Новая заметка...'
                className='create-note__text-area'
                value={value}
                onChange={onChange}
            />
            <div className='create-note__bottom-part'>
                <p className='create-note__bottom-part__date'>{props.remaining}</p>
                <NotesButton
                    title='СОЗДАТЬ'
                    onClick={onClick}
                />
            </div>
        </div>
    )
}
