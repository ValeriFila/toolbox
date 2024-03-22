import { createSlice } from '@reduxjs/toolkit'

interface NotesState {
    id: string,
    note: string,
    date: string,
    fulfilled: boolean,
}

const notes = localStorage.getItem('notes')

const lsNotes: Record<string, NotesState> = notes === null ? {} : { ...JSON.parse(notes) }
const queriedNotes: Record<string, NotesState> = notes === null ? {} : { ...JSON.parse(notes) }

const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        lsNotes,
        queriedNotes,
    },
    reducers: {
        setNotes: (state, action) => {
            state.lsNotes = action.payload
        },
        setQueriedNotes: (state, action) => {
            state.queriedNotes = action.payload
        },
    },
})

export const { setNotes, setQueriedNotes } = notesSlice.actions
export default notesSlice.reducer
