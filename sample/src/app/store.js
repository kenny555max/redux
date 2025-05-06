import { configureStore } from '@reduxjs/toolkit'
import TaskReducer from '../features/task/taskSlice'

export const store = configureStore({
  reducer: {
    tasks: TaskReducer
  },
})