import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true,
    },
    reducers: {
        toggleMneu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu: (state) => {
            state.isMenuOpen = false;
        },
    },
});

export const { toggleMneu, closeMenu } = navSlice.actions;
export default navSlice.reducer;
