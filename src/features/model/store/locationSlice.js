import { createSlice } from '@reduxjs/toolkit'

const locationSlice = createSlice({
    name: 'location',
    initialState: {
        location: '55.75222,37.61556', // Москва
    },
    reducers: {
        setLocation: (state, action) => {
            state.location = action.payload
        },
    },
})

export const { setLocation } = locationSlice.actions
export default locationSlice.reducer
