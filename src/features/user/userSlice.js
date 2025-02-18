import { createSlice } from '@reduxjs/toolkit'
// this is the state when a user is not logged in 
const initialState = {
    name: "",
    email: "",
    photo:  "",
};
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // when user login it will update the user details
        setUserLoginDetails: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
        },
        // when a user sign out it reset the user details to null
        setSignOutState: (state) => {
            state.name = null;
            state.email = null;
            state.photo = null;
        },
    },
});

export const {setUserLoginDetails, setSignOutState} = userSlice.actions;
export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;
