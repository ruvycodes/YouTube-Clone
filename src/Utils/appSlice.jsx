import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        showHamMenu: true
    },

    reducers: {
        toggleHamBurgMenu: (state) => {
            state.showHamMenu = !state.showHamMenu
        },

        closeHamBurgMenu: (state) => {
            state.showHamMenu = false
        } ,

        openHamBurgMenu: (state) => {
            state.showHamMenu = true
        }
    }
})

export const { toggleHamBurgMenu , closeHamBurgMenu , openHamBurgMenu} = appSlice.actions
export default appSlice.reducer