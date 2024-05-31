import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './modules/slicers/counterSlice'
import cartSlice from './modules/slicers/cartSlice'
import productsListSlice from './modules/slicers/productsSlice'
import authSlice from './modules/slicers/authSlice'


//Define Root State and Dispatch Types
//This creates a Redux store, and also automatically configure the Redux DevTools extension
// so that you can inspect the store while developing

export const store = configureStore({
  reducer: {
    counter:counterSlice,
    cart:cartSlice,
    productsList:productsListSlice,
    auth:authSlice,

  },
  
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;