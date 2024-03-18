import React, { useEffect, useState } from 'react'
import { CreationCard } from 'entities/Note'
import { useAppDispatch, useAppSelector } from 'shared/lib'
import { setNotes } from '../../../model/store/notesSlice'

export const NewNote = () => {
    const dispatch = useAppDispatch()
    const notes = useAppSelector((state) => state.notes.notes)
    const [note, setNote] = useState('')
    const [remain, setRemain] = useState(200)

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [dispatch, notes])

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (e.target.value.length <= 200) {
            setNote(e.target.value)
            setRemain(200 - e.target.value.length)
        }
    }
    const createNote = () => {
        if (note.trim().length > 0) {
            const id = Date.now()
            dispatch(setNotes({ ...notes,
                [id]: {
                    id,
                    note,
                    date: new Date().toLocaleDateString(),
                    fulfilled: false,
                },
            }))
            setNote('')
            setRemain(200)
        }
    }

    return (
        <CreationCard
            remaining={remain.toString()}
            onClick={createNote}
            onChange={(e) => handleChange(e)}
            value={note}
        />
    )
}
