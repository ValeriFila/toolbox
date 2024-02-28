import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { CreatedNote, NewNote } from '../../../features/components'

export const NotesSection = () => {
    const notes = useSelector((state) => state.notes.notes)

    const createdNotes = useMemo(() => {
        if (notes) {
            return notes.map((note, index) => {
                const id = Object.keys(note)[0]

                return (
                    <CreatedNote
                        key={`note_${index.toString()}`}
                        id={id}
                        note={note[id].note}
                        date={note[id].date}
                    />
                )
            })
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
