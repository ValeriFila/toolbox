import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { CreatedNote, NewNote } from '../../../features/components'

export const NotesSection = () => {
    const notes = useSelector((state) => state.notes.notes)

    const createdNotes = useMemo(() => {
        if (notes) {
            return notes.map((note, index) => (
                <CreatedNote
                    key={`note_${index.toString()}`}
                    id={note.id}
                    note={note.note}
                    date={note.date}
                />
            ))
        }
        return null
    }, [notes])

    return (
        <div className='notes-page'>
            <h1 className='notes-page__title'>Заметки</h1>
            <div className='notes-page__notes-section'>
                {createdNotes}
                <NewNote />
            </div>
        </div>
    )
}
