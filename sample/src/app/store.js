import { configureStore } from '@reduxjs/toolkit';
import UserReducer from '../features/user/userSlice';

// temporary database managed by redux
export const store = configureStore({
  reducer: {
    users: UserReducer,
    posts: [],
    comments: []
  },
});
