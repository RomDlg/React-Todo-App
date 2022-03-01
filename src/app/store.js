import { configureStore } from '@reduxjs/toolkit';
import projectReducer from '../features/ProjectSlice';
import taskReducer from '../features/TaskSlice'

export const store = configureStore({
  reducer: {
    project: projectReducer,
    task: taskReducer,
  },
});
  