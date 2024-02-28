import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useMemo, useState } from 'react'
import { NoteCard } from '../../../entities/Note'
import { setNotes } from '../NewNote/store/notesSlice'

export const CreatedNote = ({ id, note, date }) => {
    const dispatch = useDispatch()
    const notes = useSelector((state) => state.notes.notes)
    const [fulfilled, setFulfilled] = useState(false)

    const removeNote = useCallback((id) => {
        dispatch(setNotes([...notes.filter((note) => {
            const i = Object.keys(note)[0]
            return i !== id
        })]))
    }, [dispatch, notes])

    const fulfillNote = (id) => {
        // const findNote = notes.some((note) => {
        //     if (note.id === id) {
        //         note.fulfilled = true
        //         setFulfilled((prev) => !prev)
        //         return true
        //     }
        // })
        // const foundNote = notesMap.get(id)
        // console.log(foundNote)
    }

    return (
        <NoteCard
            props={{
                id,
                noteText: note,
                creationDate: date,
            }}
            onClickButton={() => removeNote(id)}
            onClickCheckbox={() => fulfillNote(id)}
            fulfilled={fulfilled}
        />
    )
}
