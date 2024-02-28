import { configureStore } from '@reduxjs/toolkit'
import resultReducer from './resultSlice'
import notesReducer from '../../features/components/NewNote/store/notesSlice'

export default configureStore({
    reducer: {
        result: resultReducer,
        notes: notesReducer,
    },
})
