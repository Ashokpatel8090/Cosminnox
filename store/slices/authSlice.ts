// import { createSlice } from "@reduxjs/toolkit";


// type AuthState = {
//     accessToken: string | null;
//     refreshToken: string | null;
//     isLoggedIn: boolean;
// }

// const initialState: AuthState={
//     accessToken: null,
//     refreshToken: null,
//     isLoggedIn: false,
// }

// const authSlice = createSlice({
//     name: "auth",
//     initialState,
//     reducers:{
//         loginSuccess: (state, action)=>{
//             state.accessToken = action.payload.accessToken
//             state.refreshToken = action.payload.refreshToken
//             state.isLoggedIn = true
//         },
//         logOut: (state)=>{
//             state.accessToken = null
//             state.refreshToken = null
//             state.isLoggedIn = false
//             localStorage.removeItem("access_token")
//             localStorage.removeItem("refresh_token")
//         }
        
//     }
// })

// export const {loginSuccess, logOut} = authSlice.actions
// export default authSlice.reducer


import { createSlice } from "@reduxjs/toolkit";

type UserRole = "STUDENT" | "FOUNDER";

type AuthState = {
  accessToken: string | null;
  refreshToken: string | null;
  isLoggedIn: boolean;
  role: UserRole; // 🔥 NEW
};

const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
  isLoggedIn: false,
  role: "STUDENT", // default
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload;
    },

    loginSuccess: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isLoggedIn = true;
    },

    logOut: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.isLoggedIn = false;
      state.role = "STUDENT";
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
    },
  },
});

export const { loginSuccess, logOut, setRole } = authSlice.actions;
export default authSlice.reducer;
