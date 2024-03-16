import { useDispatch, useSelector } from 'react-redux'
import { FC, useCallback } from 'react'
import { NoteCard } from 'entities/Note'
import { setNotes, setQueriedNotes } from '../../../model/store/notesSlice'

interface CreatedNoteCard {
    id: string;
    note: string;
    date: string;
}

export const CreatedNote: FC<CreatedNoteCard> = ({ id, note, date }) => {
    const dispatch = useDispatch()
    // @ts-ignore
    const notes = useSelector((state) => state.notes.notes)

    const removeNote = useCallback((id: string) => {
        const notesArray = Object.entries(notes)
        const filteredArray = notesArray.filter((note) => {
            const i = note[0]
            return i !== id
        })
        dispatch(setQueriedNotes({ ...Object.fromEntries(filteredArray) }))
        dispatch(setNotes({ ...Object.fromEntries(filteredArray) }))
    }, [dispatch, notes])

    const fulfillNote = useCallback((id: string) => {
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
