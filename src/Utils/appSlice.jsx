import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app" , 
    initialState: {
        showHamMenu: true
    },

    reducers: {
        toggleHamBurgMenu: (state)=> {
                state.showHamMenu = !state.showHamMenu
        }
    }
})

export const {toggleHamBurgMenu} = appSlice.actions
export default appSlice.reducer