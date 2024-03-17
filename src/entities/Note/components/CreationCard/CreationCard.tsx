import './CreationCard.scss'
import React, { FC } from 'react'
import { NotesButton } from 'shared/ui'

interface Card {
    props: {
        remaining: string;
    };
    onClick: () => void;
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
    value: string;
}

export const CreationCard: FC<Card> = ({ props, onClick, onChange, value }) => {
    return (
        <div className='create-note'>
            <textarea
                placeholder='Новая заметка...'
                className='create-note__text-area'
                value={value}
                onChange={() => onChange}
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
