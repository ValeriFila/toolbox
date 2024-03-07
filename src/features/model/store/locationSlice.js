import { createSlice } from '@reduxjs/toolkit'

const locationSlice = createSlice({
    name: 'location',
    initialState: {
        location: 'Москва',
    },
    reducers: {
        setLocation: (state, action) => {
            state.location = action.payload
        },
    },
})

export const { setLocation } = locationSlice.actions
export default locationSlice.reducer
