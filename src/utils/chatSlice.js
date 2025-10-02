import { createSlice } from "@reduxjs/toolkit";

const chatSLice = createSlice({
    name: "chat",
    initialState: {
        messages: []
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages.unshift(action.payload)
            state.messages.splice(10,1)
        }
    }
})

export default chatSLice.reducer
export const {addMessage } = chatSLice.actions