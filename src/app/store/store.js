import { configureStore } from '@reduxjs/toolkit'
import resultReducer from '../../features/model/store/resultSlice'
import notesReducer from '../../features/model/store/notesSlice'

export default configureStore({
    reducer: {
        result: resultReducer,
        notes: notesReducer,
    },
})
