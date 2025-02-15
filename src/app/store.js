import { configureStore } from "@reduxjs/toolkit";
// userReducer is responsible for handling the user related state(authentication,profile data )
import userReducer from "../features/user/userSlice";
import movieReducer from "../features/movie/movieSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
    },
});