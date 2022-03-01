import { createSlice } from "@reduxjs/toolkit";

const initialState = {value: []}

export const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {
        initProjects: (state, action) => {
            state.value = action.payload
        },
        createProject: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { createProject, initProjects } = projectSlice.actions;

export default projectSlice.reducer 