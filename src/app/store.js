import { configureStore } from '@reduxjs/toolkit';
import BlogSlice from '../blogSlice';
export const store = configureStore({
  reducer: {
    blog: BlogSlice,
  },
});
