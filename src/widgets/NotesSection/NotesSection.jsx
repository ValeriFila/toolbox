import React from 'react'
import { NewNote } from '../../features/components'

export const NotesSection = () => {
    return (
        <div className='notes-page'>
            <h1 className='notes-page__title'>Заметки</h1>
            <div className='notes-page__notes-section'>
                <NewNote />
            </div>
        </div>
    )
}
