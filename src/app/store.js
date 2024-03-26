import { configureStore } from '@reduxjs/toolkit'
import numberReducer from '../slices/counterSlice'

export const store = configureStore({
  reducer: {
    counter:numberReducer
  },
})