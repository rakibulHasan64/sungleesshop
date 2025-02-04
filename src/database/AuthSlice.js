import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogine: false,
    user: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLogineReduxData: (state, action) => {
            state.isLogine = true;
            state.user = action.payload;
        },
    },
});

export default authSlice.reducer;
export const {  setLogineReduxData} = authSlice.actions;