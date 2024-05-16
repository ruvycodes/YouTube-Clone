import { createSlice } from "@reduxjs/toolkit";

const cacheSlice = createSlice({
    name: "cache",
    initialState: {
        cacheStore: {}
    },

    reducers: {
        cacheResults: (state , action)=> {
            state.cacheStore = {...state.cacheStore , ...action.payload} // merge two objects and update the cacheStore
        }
    }
})

export const {cacheResults} = cacheSlice.actions;
export default cacheSlice.reducer;