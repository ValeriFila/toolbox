import './NoteCard.scss'
import clsx from 'clsx'
import { CustomCheckbox, NotesButton } from '../../../../shared/ui'

export const NoteCard = ({ props, onClickButton, onClickCheckbox, fulfilled }) => {
    return (
        <div
            id={props.id}
            className='note'
        >
            <p className={clsx('note__text', fulfilled && 'note__text--crossed')}>{props.noteText}</p>
            <div className='note__bottom'>
                <p className='note__bottom__date'>{props.creationDate}</p>
                <div className='note__bottom__managing-area'>
                    <NotesButton
                        title='УДАЛИТЬ'
                        onClick={onClickButton}
                    />
                    <CustomCheckbox
                        onClick={onClickCheckbox}
                    />
                </div>
            </div>
        </div>
    )
}
