import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks: [], // an aray of object
}

// functionality that helps us to update the data in the database/store
export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    save_task: (task) => {
      // save task
      return {
        tasks: [...tasks, task]
      }
    },
    update_task: (taskId) => {
      // update the exact task
    },
    delete_task: (taskId) => {
      // delete one task
    },
    get_task: (taskId) => {
        // get one task
    },
    get_tasks: () => {
      // return all tasks
    },
  },
})

// Action creators are generated for each case reducer function
export const { save_task } = taskSlice.actions

export default taskSlice.reducer;