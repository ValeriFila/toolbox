import './CreationCard.scss'
import React, { memo } from 'react'
import { NotesButton } from 'shared/ui'

interface CreationCardProps {
    remaining: string
    onClick: () => void
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>
    value: string
}

export const CreationCard = memo((props: CreationCardProps) => {
    const {
        remaining,
        onClick,
        onChange,
        value,
    } = props

    return (
        <div className='create-note'>
            <textarea
                placeholder='Новая заметка...'
                className='create-note__text-area'
                value={value}
                onChange={onChange}
            />
            <div className='create-note__bottom-part'>
                <p className='create-note__bottom-part__date'>{remaining}</p>
                <NotesButton
                    title='СОЗДАТЬ'
                    onClick={onClick}
                />
            </div>
        </div>
    )
})
