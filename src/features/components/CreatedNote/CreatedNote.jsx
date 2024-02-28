import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'
import { NoteCard } from '../../../entities/Note'
import { setNotes } from '../NewNote/store/notesSlice'

export const CreatedNote = ({ id, note, date }) => {
    const dispatch = useDispatch()
    const notes = useSelector((state) => state.notes.notes)

    const handleClick = useCallback((id) => {
        dispatch(setNotes(notes.filter((note) => {
            return note.id !== id
        })))
    }, [dispatch, notes])

    return (
        <NoteCard
            props={{
                id,
                noteText: note,
                creationDate: date,
            }}
            onClick={() => handleClick(id)}
        />
    )
}
