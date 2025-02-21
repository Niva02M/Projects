import { configureStore } from "@reduxjs/toolkit";
import signUpSlice from "../slice/authSlice";
import loginSlice from "../slice/loginSlice";

export const store = configureStore({
  reducer: {
    signup: signUpSlice,
    login: loginSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
