import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
}

// this slice allws us to manipulate the users data in the database
// GET
// DELETE
// SAVE DATA
// UPDATE
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    get_users: () => {

    },
    get_user: () => {

    },
    delete_user: () => {

    },
    save_users: (users) => {
        return {
            users
        }
    },
    save_user: () => {

    },
    update_user: () => {
        
    }
  },
})

// Action creators are generated for each case reducer function
export const {
    delete_user,
    save_user,
    save_users,
    get_user,
    get_users,
    update_user
} = userSlice.actions

export default userSlice.reducer