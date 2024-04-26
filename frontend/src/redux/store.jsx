import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const store = configureStore({
  // Define the Reducer
  reducer: {
    users: userReducer,
  },
});
export default store;
