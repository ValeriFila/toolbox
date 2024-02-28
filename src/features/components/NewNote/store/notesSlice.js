import { createSlice } from '@reduxjs/toolkit'

let notes
if (localStorage.getItem('notes') === null) {
    notes = []
} else {
    notes = JSON.parse(localStorage.getItem('notes'))
}

const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        notes: [...notes],
        note: '',
    },
    reducers: {
        setNotes: (state, action) => {
            state.notes = [...action.payload]
        },
        setNote: (state, action) => {
            state.notes = action.payload
        },
    },
})

export const { setNotes, setNote } = notesSlice.actions
export default notesSlice.reducer
