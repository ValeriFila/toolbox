import React, { FC, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { CreatedNote, NewNote, SearchArea } from 'features/components'
import './NotesSection.scss'

type Note = {
    note: string;
    date: string;
}

export const NotesSection: FC = () => {
    // @ts-ignore
    const queriedNotes = useSelector((state) => state.notes.queriedNotes)
    const createdNotes = useMemo(() => {
        if (queriedNotes) {
            const arrayNotes: [string, Note][] = Object.entries(queriedNotes)

            return arrayNotes.map((note, index) => {
                const id = note[0]
                const noteBody = note[1]

                return (
                    <CreatedNote
                        key={`note_${index.toString()}`}
                        id={id}
                        note={noteBody.note}
                        date={noteBody.date}
                    />
                )
            })
        }
        return null
    }, [queriedNotes])

    return (
        <div className='notes-page'>
            <h1 className='notes-page__title'>Заметки</h1>
            <SearchArea />
            <div className='notes-page__notes-section'>
                {createdNotes}
                <NewNote />
            </div>
        </div>
    )
}
