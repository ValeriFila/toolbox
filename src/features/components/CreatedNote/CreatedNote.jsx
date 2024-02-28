import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'
import { NoteCard } from '../../../entities/Note'
import { setNotes } from '../NewNote/store/notesSlice'

export const CreatedNote = ({ id, note, date }) => {
    const dispatch = useDispatch()
    const notes = useSelector((state) => state.notes.notes)

    const removeNote = useCallback((id) => {
        const notesArray = Object.entries(notes)
        const filteredArray = notesArray.filter((note) => {
            const i = note[0]
            return i !== id
        })
        dispatch(setNotes({ ...Object.fromEntries(filteredArray) }))
    }, [dispatch, notes])

    const fulfillNote = useCallback((id) => {
        const targetNote = { [id]: { ...notes[id], fulfilled: !notes[id].fulfilled } }
        dispatch(setNotes({ ...notes, ...targetNote }))
    }, [dispatch, notes])

    return (
        <NoteCard
            props={{
                id,
                noteText: note,
                creationDate: date,
            }}
            onClickButton={() => removeNote(id)}
            onChangeCheckbox={() => fulfillNote(id)}
            fulfilled={notes[id].fulfilled}
        />
    )
}
