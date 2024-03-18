import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { rtkApi } from 'shared/api'
import resultReducer from 'features/model/store/resultSlice'
import notesReducer from 'features/model/store/notesSlice'
import locationReducer from 'features/model/store/locationSlice'

const store = configureStore({
    reducer: {
        [rtkApi.reducerPath]: rtkApi.reducer,
        result: resultReducer,
        notes: notesReducer,
        location: locationReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(rtkApi.middleware)
    },
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
setupListeners(store.dispatch)
export default store
