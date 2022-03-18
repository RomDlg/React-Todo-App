import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: "task",
    initialState:
    {
        value: {
            title: "Empty title",
            description: "Empty description",
            projectId: null,
            done: false
        } 
    },
    reducers: {
        initTask: (state, action) => {
            state.value = action.payload
        },
        createTask: (state, action) => {
            state.value.push(action.payload)
        }
    }
})

export const {initTask, createTask} = taskSlice.actions;

export default taskSlice.reducer;