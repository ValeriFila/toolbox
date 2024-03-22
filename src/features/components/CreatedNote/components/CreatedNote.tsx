import { useAppDispatch, useAppSelector } from 'shared/lib'
import { useCallback, memo } from 'react'
import { NoteCard } from 'entities/Note'
import { setNotes, setQueriedNotes } from '../../../model/store/notesSlice'

interface CreatedNoteProps {
    id: string
    note: string
    date: string
}

export const CreatedNote = memo((props: CreatedNoteProps) => {
    const {
        id,
        note,
        date,
    } = props

    const dispatch = useAppDispatch()
    const notes = useAppSelector((state) => state.notes.lsNotes)

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
            cardBody={{
                id,
                noteText: note,
                creationDate: date,
            }}
            onClickButton={() => removeNote(id)}
            onChangeCheckbox={() => fulfillNote(id)}
            fulfilled={notes[id].fulfilled}
        />
    )
})
