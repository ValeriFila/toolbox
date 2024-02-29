import { useCallback, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SearchField } from '../../../../entities/Note'
import { setQueriedNotes } from '../../../model/store/notesSlice.js'
import { useDebounce } from '../../../../shared/lib'

export const SearchArea = () => {
    const dispatch = useDispatch()
    const ref = useRef()
    const notes = useSelector((state) => state.notes.notes)

    useEffect(() => {
        dispatch(setQueriedNotes({ ...notes }))
        if (ref.current) {
            ref.current.value = ''
        }
    }, [dispatch, notes])

    const handleChange = useCallback((e) => {
        const resArray = Object.entries(notes).filter((note) => {
            return note[1].note.trim().toLowerCase().includes(e.target.value.trim().toLowerCase())
        })
        const resObj = Object.fromEntries(resArray)
        dispatch(setQueriedNotes({ ...resObj }))
    }, [dispatch, notes])

    const debouncedChange = useDebounce((e) => handleChange(e), 400)

    return (
        <SearchField
            inputRef={ref}
            onChange={(e) => debouncedChange(e)}
        />
    )
}
