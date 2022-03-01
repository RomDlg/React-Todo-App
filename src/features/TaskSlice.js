import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: "task",
    initialState:
    {
        value: {
            title: "Empty title",
            description: "Empty description",
            done: false
        } 
    },
    reducers: {
        createTask: (state, action) => {
            state.value = action.payload
        }
    }
})

export default taskSlice.reducer;