import { createSlice } from "@reduxjs/toolkit";

const initialState = {value: null}

export const selectedSlice = createSlice({
    name: "selected",
    initialState,
    reducers: {
        select: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { select } = selectedSlice.actions;

export default selectedSlice.reducer 