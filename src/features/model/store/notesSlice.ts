import { createSlice } from '@reduxjs/toolkit'

const notes = localStorage.getItem('notes')

const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        notes: notes === null ? {} : { ...JSON.parse(notes) },
        queriedNotes: notes === null ? {} : { ...JSON.parse(notes) },
    },
    reducers: {
        setNotes: (state, action) => {
            state.notes = action.payload
        },
        setQueriedNotes: (state, action) => {
            state.queriedNotes = action.payload
        },
    },
})

export const { setNotes, setQueriedNotes } = notesSlice.actions
export default notesSlice.reducer
