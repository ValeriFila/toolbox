import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CreationCard } from '../../../../entities/Note'
import { setNotes } from '../store/notesSlice'

export const NewNote = () => {
    const dispatch = useDispatch()
    const notes = useSelector((state) => state.notes.notes)
    const [note, setNote] = useState('')
    const [remain, setRemain] = useState(200)
    // const notesMap = new Map()
    // console.log(JSON.stringify(Object.entries(notesMap)))

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    const handleChange = (e) => {
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
            props={{
                remaining: remain.toString(),
            }}
            onClick={createNote}
            onChange={(e) => handleChange(e)}
            value={note}
        />
    )
}
