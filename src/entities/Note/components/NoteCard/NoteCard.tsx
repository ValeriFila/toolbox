import './NoteCard.scss'
import clsx from 'clsx'
import { memo } from 'react'
import { CustomCheckbox, NotesButton } from 'shared/ui'

interface NoteCardProps {
    cardBody: {
        id: string,
        noteText: string,
        creationDate: string
    }
    onClickButton: () => void
    onChangeCheckbox: () => void
    fulfilled: boolean
}

export const NoteCard = memo((props: NoteCardProps) => {
    const {
        cardBody,
        onClickButton,
        onChangeCheckbox,
        fulfilled,
    } = props

    return (
        <div
            id={cardBody.id}
            className='note'
        >
            <p className={clsx('note__text', fulfilled && 'note__text--crossed')}>{cardBody.noteText}</p>
            <div className='note__bottom'>
                <p className='note__bottom__date'>{cardBody.creationDate}</p>
                <div className='note__bottom__managing-area'>
                    <NotesButton
                        title='УДАЛИТЬ'
                        onClick={onClickButton}
                    />
                    <CustomCheckbox
                        onChange={onChangeCheckbox}
                        checked={fulfilled}
                    />
                </div>
            </div>
        </div>
    )
})
