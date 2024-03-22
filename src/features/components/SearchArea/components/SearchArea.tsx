import React, { useCallback, useEffect, useRef } from 'react'
import { SearchField } from 'entities/Note'
import { useAppSelector, useAppDispatch, useDebounce } from 'shared/lib'
import { setQueriedNotes } from '../../../model/store/notesSlice.ts'

export const SearchArea = () => {
    const dispatch = useAppDispatch()
    const ref = useRef<HTMLInputElement>(null)
    const notes = useAppSelector((state) => state.notes.lsNotes)

    useEffect(() => {
        dispatch(setQueriedNotes({ ...notes }))
        if (ref.current) {
            ref.current.value = ''
        }
    }, [dispatch, notes])

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const resArray = Object.entries(notes).filter((note) => {
            return note[1].note.trim().toLowerCase().includes(e.target.value.trim().toLowerCase())
        })
        const resObj = Object.fromEntries(resArray)
        dispatch(setQueriedNotes({ ...resObj }))
    }, [dispatch, notes])

    const debouncedChange = useDebounce((e: React.ChangeEvent<HTMLInputElement>) => handleChange(e), 400)

    return (
        <SearchField
            inputRef={ref}
            onChange={(e) => debouncedChange(e)}
        />
    )
}
