// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
// import apiClient from "@/lib/apiClient"


// /* ================= TYPES ================= */

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

// type StartupState = {
//   startups: FounderStartup[]
//   loading: boolean
//   error: any
// }

// const initialState: StartupState = {
//   startups: [],
//   loading: false,
//   error: null,
// }

// /* ================= FETCH ================= */

// export const fetchStartups = createAsyncThunk(
//   "startup/fetch",
//   async (_, { rejectWithValue }) => {
//     try {
//       const res = await apiClient.get("/f/details")
//       return res.data
//     } catch (err: any) {
//       return rejectWithValue(err?.response?.data)
//     }
//   }
// )

// /* ================= ADD STARTUP ================= */

// export const addStartup = createAsyncThunk(
//   "startup/add",
//   async (payload: any, { rejectWithValue }) => {
//     try {
//       const res = await apiClient.post("/f/add", payload)
//       return res.data
//     } catch (err: any) {
//       return rejectWithValue(err?.response?.data)
//     }
//   }
// )

// /* ================= UPDATE ================= */

// export const updateStartup = createAsyncThunk(
//   "startup/update",
//   async (
//     { startup_id, payload }: any,
//     { rejectWithValue }
//   ) => {
//     try {
//       const res = await apiClient.patch(
//         `/f/update?startup_id=${startup_id}`,
//         payload
//       )
//       return res.data
//     } catch (err: any) {
//       return rejectWithValue(err?.response?.data)
//     }
//   }
// )


// /* ================= DELETE STARTUP ================= */

// export const deleteStartup = createAsyncThunk(
//   "startup/delete",
//   async (startup_id: number, { rejectWithValue }) => {
//     try {
//       await apiClient.delete(
//         `/f/del?startup_id=${startup_id}`
//       )
//       return startup_id
//     } catch (err: any) {
//       return rejectWithValue(err?.response?.data)
//     }
//   }
// )


// /* ================= SLICE ================= */

// const startupSlice = createSlice({
//   name: "startup",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchStartups.pending, (state) => {
//         state.loading = true
//       })
//       .addCase(fetchStartups.fulfilled, (state, action) => {
//         state.loading = false
//         state.startups = action.payload || []
//       })
//       .addCase(fetchStartups.rejected, (state, action: any) => {
//         state.loading = false
//         state.error = action.payload
//       })

//       .addCase(addStartup.pending, (state) => {
//         state.loading = true
//       })
//       .addCase(addStartup.fulfilled, (state) => {
//         state.loading = false
//       })
//       .addCase(addStartup.rejected, (state, action: any) => {
//         state.loading = false
//         state.error = action.payload
//       })

//       .addCase(updateStartup.pending, (state) => {
//         state.loading = true
//       })
//       .addCase(updateStartup.fulfilled, (state) => {
//         state.loading = false
//       })
//       .addCase(updateStartup.rejected, (state, action: any) => {
//         state.loading = false
//         state.error = action.payload
//       })

//       .addCase(deleteStartup.pending, (state) => {
//   state.loading = true
// })
// .addCase(deleteStartup.fulfilled, (state, action) => {
//   state.loading = false

//   /* remove deleted startup locally */
//   state.startups = state.startups.filter(
//     (s) => s.startup.id !== action.payload
//   )
// })
// .addCase(deleteStartup.rejected, (state, action: any) => {
//   state.loading = false
//   state.error = action.payload
// })

//   },
// })

// export default startupSlice.reducer






import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import apiClient from "@/lib/apiClient"

/* ================= TYPES ================= */

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

type StartupState = {
  startups: FounderStartup[]
  loading: boolean
  error: any
}

/* ================= INITIAL STATE ================= */

const initialState: StartupState = {
  startups: [],
  loading: false,
  error: null,
}

/* ================= FETCH STARTUPS ================= */

export const fetchStartups = createAsyncThunk(
  "startup/fetch",
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

/* ================= ADD STARTUP ================= */

export const addStartup = createAsyncThunk(
  "startup/add",
  async (payload: any, { rejectWithValue }) => {
    try {
      const res = await apiClient.post("/f/add", payload)
      return res.data
    } catch (err: any) {
      return rejectWithValue(
        err?.response?.data || err.message
      )
    }
  }
)

/* ================= UPDATE STARTUP ================= */

export const updateStartup = createAsyncThunk(
  "startup/update",
  async (
    { startup_id, payload }: any,
    { rejectWithValue }
  ) => {
    try {
      const res = await apiClient.patch(
        `/f/update?startup_id=${startup_id}`,
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

/* ================= DELETE STARTUP ================= */

export const deleteStartup = createAsyncThunk(
  "startup/delete",
  async (startup_id: number, { rejectWithValue }) => {
    try {
      await apiClient.delete(
        `/f/del?startup_id=${startup_id}`
      )

      return startup_id
    } catch (err: any) {
      return rejectWithValue(
        err?.response?.data || err.message
      )
    }
  }
)

/* ================= SLICE ================= */

const startupSlice = createSlice({
  name: "startup",
  initialState,
  reducers: {
    /* useful on logout */
    clearStartups: (state) => {
      state.startups = []
      state.loading = false
      state.error = null
    },
  },

  extraReducers: (builder) => {
    builder

      /* ===== FETCH ===== */
      .addCase(fetchStartups.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchStartups.fulfilled, (state, action) => {
        state.loading = false
        state.startups = action.payload || []
      })
      .addCase(fetchStartups.rejected, (state, action: any) => {
        state.loading = false
        state.error = action.payload
      })

      /* ===== ADD ===== */
      .addCase(addStartup.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(addStartup.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(addStartup.rejected, (state, action: any) => {
        state.loading = false
        state.error = action.payload
      })

      /* ===== UPDATE ===== */
      .addCase(updateStartup.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(updateStartup.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(updateStartup.rejected, (state, action: any) => {
        state.loading = false
        state.error = action.payload
      })

      /* ===== DELETE ===== */
      .addCase(deleteStartup.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(deleteStartup.fulfilled, (state, action) => {
        state.loading = false

        state.startups = state.startups.filter(
          (s) => s.startup.id !== action.payload
        )
      })
      .addCase(deleteStartup.rejected, (state, action: any) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const { clearStartups } = startupSlice.actions
export default startupSlice.reducer
