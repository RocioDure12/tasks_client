import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/reducers/counterSlice'

//This creates a Redux store, and also automatically configure the Redux DevTools extension
// so that you can inspect the store while developing

export const store = configureStore({
  reducer: {
    counter:counterReducer

  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;