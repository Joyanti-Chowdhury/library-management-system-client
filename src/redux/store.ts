import { configureStore } from '@reduxjs/toolkit'

import bookReducer from './features/booksSlice/booksSlice';
import { baseApi } from '../api/baseApi';


export const store = configureStore({
  reducer: {
   books: bookReducer,
 
  [baseApi.reducerPath] : baseApi.reducer

  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(baseApi.middleware)
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch