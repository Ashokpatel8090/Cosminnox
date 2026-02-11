// import {configureStore} from "@reduxjs/toolkit";
// import authReducer from "./slices/authSlice";

// export const store = configureStore({
//     reducer: {
//         auth: authReducer,
//     },
// })

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;


import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./slices/authSlice"
import studentReducer from "./slices/studentSlice"
import founderReducer from "./slices/founderSlice"
import startupReducer from "./slices/startupSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    student: studentReducer,
    founder: founderReducer,
    startup: startupReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
