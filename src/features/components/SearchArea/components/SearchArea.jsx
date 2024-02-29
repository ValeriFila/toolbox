import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SearchField } from '../../../../entities/Note'
import { setQueriedNotes } from '../../../model/store/notesSlice.js'

export const SearchArea = () => {
    const dispatch = useDispatch()
    const notes = useSelector((state) => state.notes.notes)
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        dispatch(setQueriedNotes({ ...notes }))
        setSearchQuery('')
    }, [dispatch, notes])
    
    const handleChange = useCallback((e) => {
        setSearchQuery(e.target.value.trim())
        const resArray = Object.entries(notes).filter((note) => {
            return note[1].note.trim().toLowerCase().includes(e.target.value.trim().toLowerCase())
        })
        const resObj = Object.fromEntries(resArray)
        dispatch(setQueriedNotes({ ...resObj }))
    }, [dispatch, notes])

    return (
        <SearchField
            onChange={(e) => handleChange(e)}
            value={searchQuery}
        />
    )
}
