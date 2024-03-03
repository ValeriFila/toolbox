import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import resultReducer from '../../features/model/store/resultSlice'
import notesReducer from '../../features/model/store/notesSlice'
import { rtkApi } from '../../shared/api'

const store = configureStore({
    reducer: {
        [rtkApi.reducerPath]: rtkApi.reducer,
        result: resultReducer,
        notes: notesReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(rtkApi.middleware)
    },
})
setupListeners(store.dispatch)
export default store
