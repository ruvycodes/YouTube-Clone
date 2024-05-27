import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice = createSlice({
    name : "liveChat",
    initialState: {
        messages: []
    },

    reducers : {
        addMessages: (state , action) => {
            state.messages.push(action.payload)
        },

        //remove message after a certain limit
        removeMessages: (state) => {
            state.messages.splice(0,1)
        }
    }
})

export const {addMessages , removeMessages} = liveChatSlice.actions;
export default liveChatSlice.reducer;