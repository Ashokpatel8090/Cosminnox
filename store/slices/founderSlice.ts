// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
// import apiClient from "@/lib/apiClient"

// /* ================= TYPES ================= */

// type FounderProfile = {
//   id: number
//   first_name: string
//   last_name: string
//   phone: string
//   dob: string | null
//   bio: string | null
//   email: string
//   is_active: boolean
//   is_email_verified: boolean
//   is_phone_verified: boolean
//   created_at: string
// }

// /* ===== Startup Details ===== */

// type Startup = {
//   id: number
//   name: string
//   slug: string
//   description: string
//   stage: string
//   incorporation_country: string
//   founded_year: string
//   website: string
//   is_bootstrap: boolean
// }

// type Role = {
//   id: number
//   title: string
//   equity: string
//   joined_at: string
//   is_primary_contact: boolean
// }

// type FounderStartup = {
//   startup: Startup
//   role: Role
// }

// /* ================= STATE ================= */

// type FounderState = {
//   profile: FounderProfile | null
//   startups: FounderStartup[]
//   loading: boolean
//   error: any
// }

// const initialState: FounderState = {
//   profile: null,
//   startups: [],
//   loading: false,
//   error: null,
// }

// /* ================= FETCH PROFILE ================= */

// export const fetchFounderProfile = createAsyncThunk(
//   "founder/profile",
//   async (_, { rejectWithValue }) => {
//     try {
//       const res = await apiClient.get("/f/profile")
//       return res.data
//     } catch (err: any) {
//       return rejectWithValue(err?.response?.data)
//     }
//   }
// )

// /* ================= FETCH STARTUPS ================= */

// export const fetchFounderStartups = createAsyncThunk(
//   "founder/startups",
//   async (_, { rejectWithValue }) => {
//     try {
//       const res = await apiClient.get("/f/details")
//       return res.data
//     } catch (err: any) {
//       return rejectWithValue(err?.response?.data)
//     }
//   }
// )

// /* ================= UPDATE PROFILE ================= */

// export const updateFounderProfile = createAsyncThunk(
//   "founder/updateProfile",
//   async (payload: any, { rejectWithValue }) => {
//     try {
//       const res = await apiClient.patch(
//         "/f/up/profile",
//         payload
//       )
//       return res.data
//     } catch (err: any) {
//       return rejectWithValue(err?.response?.data)
//     }
//   }
// )

// /* ================= SLICE ================= */

// const founderSlice = createSlice({
//   name: "founder",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       /* PROFILE */
//       .addCase(fetchFounderProfile.pending, (state) => {
//         state.loading = true
//       })
//       .addCase(fetchFounderProfile.fulfilled, (state, action) => {
//         state.loading = false
//         state.profile = action.payload
//       })
//       .addCase(fetchFounderProfile.rejected, (state, action: any) => {
//         state.loading = false
//         state.error = action.payload
//       })

//       /* STARTUPS */
//       .addCase(fetchFounderStartups.pending, (state) => {
//         state.loading = true
//       })
//       .addCase(fetchFounderStartups.fulfilled, (state, action) => {
//         state.loading = false
//         state.startups = action.payload || []
//       })
//       .addCase(fetchFounderStartups.rejected, (state, action: any) => {
//         state.loading = false
//         state.error = action.payload
//       })

//       /* UPDATE */
//       .addCase(updateFounderProfile.pending, (state) => {
//         state.loading = true
//       })
//       .addCase(updateFounderProfile.fulfilled, (state) => {
//         state.loading = false
//       })
//       .addCase(updateFounderProfile.rejected, (state, action: any) => {
//         state.loading = false
//         state.error = action.payload
//       })
//   },
// })

// export default founderSlice.reducer





import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import apiClient from "@/lib/apiClient"

/* ================= TYPES ================= */

type FounderProfile = {
  id: number
  first_name: string
  last_name: string
  phone: string
  dob: string | null
  bio: string | null
  email: string
  is_active: boolean
  is_email_verified: boolean
  is_phone_verified: boolean
  created_at: string
}

/* ===== Startup Details ===== */

type Startup = {
  id: number
  name: string
  slug: string
  description: string
  stage: string
  incorporation_country: string
  founded_year: string
  website: string
  is_bootstrap: boolean
}

type Role = {
  id: number
  title: string
  equity: string
  joined_at: string
  is_primary_contact: boolean
}

type FounderStartup = {
  startup: Startup
  role: Role
}

/* ================= STATE ================= */

type FounderState = {
  profile: FounderProfile | null
  startups: FounderStartup[]
  loading: boolean
  error: any
}

const initialState: FounderState = {
  profile: null,
  startups: [],
  loading: false,
  error: null,
}

/* ================= FETCH PROFILE ================= */

export const fetchFounderProfile = createAsyncThunk(
  "founder/profile",
  async (_, { rejectWithValue }) => {
    try {
      const res = await apiClient.get("/f/profile")
      return res.data
    } catch (err: any) {
      return rejectWithValue(
        err?.response?.data || err.message
      )
    }
  }
)

/* ================= FETCH STARTUPS ================= */

export const fetchFounderStartups = createAsyncThunk(
  "founder/startups",
  async (_, { rejectWithValue }) => {
    try {
      const res = await apiClient.get("/f/details")
      return res.data
    } catch (err: any) {
      return rejectWithValue(
        err?.response?.data || err.message
      )
    }
  }
)

/* ================= UPDATE PROFILE ================= */

export const updateFounderProfile = createAsyncThunk(
  "founder/updateProfile",
  async (payload: any, { rejectWithValue }) => {
    try {
      const res = await apiClient.patch(
        "/f/up/profile",
        payload
      )
      return res.data
    } catch (err: any) {
      return rejectWithValue(
        err?.response?.data || err.message
      )
    }
  }
)

/* ================= SLICE ================= */

const founderSlice = createSlice({
  name: "founder",
  initialState,

  reducers: {
    /* Useful on logout */
    clearFounder: (state) => {
      state.profile = null
      state.startups = []
      state.loading = false
      state.error = null
    },
  },

  extraReducers: (builder) => {
    builder

      /* ===== FETCH PROFILE ===== */
      .addCase(fetchFounderProfile.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchFounderProfile.fulfilled, (state, action) => {
        state.loading = false
        state.profile = action.payload
      })
      .addCase(fetchFounderProfile.rejected, (state, action: any) => {
        state.loading = false
        state.error = action.payload
      })

      /* ===== FETCH STARTUPS ===== */
      .addCase(fetchFounderStartups.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchFounderStartups.fulfilled, (state, action) => {
        state.loading = false
        state.startups = action.payload || []
      })
      .addCase(fetchFounderStartups.rejected, (state, action: any) => {
        state.loading = false
        state.error = action.payload
      })

      /* ===== UPDATE PROFILE ===== */
      .addCase(updateFounderProfile.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(updateFounderProfile.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(updateFounderProfile.rejected, (state, action: any) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const { clearFounder } = founderSlice.actions
export default founderSlice.reducer
