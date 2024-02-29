import { createSlice } from '@reduxjs/toolkit'

const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        notes: localStorage.getItem('notes') === null ? {} : { ...JSON.parse(localStorage.getItem('notes')) },
        queriedNotes: localStorage.getItem('notes') === null ? {} : { ...JSON.parse(localStorage.getItem('notes')) },
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
