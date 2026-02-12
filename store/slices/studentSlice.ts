// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
// import apiClient from "@/lib/apiClient"


// /* ================= TYPES ================= */

// type User = {
//   id: number
//   email: string
//   phone: string
//   first_name: string
//   last_name: string
//   dob: string
//   is_active: boolean
//   is_email_verified: boolean
//   is_phone_verified: boolean
//   created_at: string
// }

// type Student = {
//   id: number
//   college: string
//   passing_year: string
//   linkedin_url: string
// }

// type StudentState = {
//   user: User | null
//   student: Student | null
//   skills: string[]
//   profileImage: string | null
//   loading: boolean
//   error: any
// }

// /* ================= INITIAL ================= */

// const initialState: StudentState = {
//   user: null,
//   student: null,
//   skills: [],
//   profileImage: null,
//   loading: false,
//   error: null,
// }

// /* ================= FETCH DETAILS ================= */

// export const fetchStudentDetails = createAsyncThunk(
//   "student/details",
//   async (_, { rejectWithValue }) => {
//     try {
//       const res = await apiClient.get("/st/details")
//       return res.data
//     } catch (err: any) {
//       return rejectWithValue(err?.response?.data)
//     }
//   }
// )

// /* ================= UPDATE PROFILE ================= */

// export const updateStudentProfile = createAsyncThunk(
//   "student/updateProfile",
//   async (payload: any, { rejectWithValue }) => {
//     try {
//       const res = await apiClient.patch("/st/update", payload)
//       return res.data
//     } catch (err: any) {
//       return rejectWithValue(err?.response?.data)
//     }
//   }
// )


// /* ================= PROFILE IMAGE ================= */

// export const fetchProfileImage = createAsyncThunk(
//   "student/getProfileImage",
//   async (_, { rejectWithValue }) => {
//     try {
//       const res = await apiClient.get("/u/get/prof-img")
//       return res.data.url
//     } catch (err: any) {
//       return rejectWithValue(err?.response?.data)
//     }
//   }
// )

// export const uploadProfileImage = createAsyncThunk(
//   "student/uploadProfileImage",
//   async (file: File, { rejectWithValue }) => {
//     try {
//       const formData = new FormData()
//       formData.append("file", file)

//       const res = await apiClient.post(
//         "/u/update/prof-img",
//         formData,
//         { headers: { "Content-Type": "multipart/form-data" } }
//       )

//       return res.data.url
//     } catch (err: any) {
//       return rejectWithValue(err?.response?.data)
//     }
//   }
// )

// export const deleteProfileImage = createAsyncThunk(
//   "student/deleteProfileImage",
//   async (_, { rejectWithValue }) => {
//     try {
//       await apiClient.delete("/u/del/prof-img")
//       return null
//     } catch (err: any) {
//       return rejectWithValue(err?.response?.data)
//     }
//   }
// )

// /* ================= SLICE ================= */

// const studentSlice = createSlice({
//   name: "student",
//   initialState,
//   reducers: {
//     clearStudent: (state) => {
//       state.user = null
//       state.student = null
//       state.skills = []
//       state.profileImage = null
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchStudentDetails.pending, (state) => {
//         state.loading = true
//       })
//       .addCase(fetchStudentDetails.fulfilled, (state, action) => {
//         state.loading = false
//         state.user = action.payload.user
//         state.student = action.payload.student
//         state.skills = action.payload.skills || []
//       })
//       .addCase(fetchStudentDetails.rejected, (state, action: any) => {
//         state.loading = false
//         state.error = action.payload
//       })

//       /* UPDATE PROFILE */
//       .addCase(updateStudentProfile.pending, (state) => {
//         state.loading = true
//       })
//       .addCase(updateStudentProfile.fulfilled, (state) => {
//         state.loading = false
//       })
//       .addCase(updateStudentProfile.rejected, (state, action: any) => {
//         state.loading = false
//         state.error = action.payload
//       })

//       .addCase(fetchProfileImage.fulfilled, (state, action) => {
//         state.profileImage = action.payload
//       })

//       .addCase(uploadProfileImage.fulfilled, (state, action) => {
//         state.profileImage = action.payload
//       })

//       .addCase(deleteProfileImage.fulfilled, (state) => {
//         state.profileImage = null
//       })
//   },
// })

// export const { clearStudent } = studentSlice.actions
// export default studentSlice.reducer




import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import apiClient from "@/lib/apiClient"

/* ================= TYPES ================= */

type User = {
  id: number
  email: string
  phone: string
  first_name: string
  last_name: string
  dob: string
  is_active: boolean
  is_email_verified: boolean
  is_phone_verified: boolean
  created_at: string
}

type Student = {
  id: number
  college: string
  passing_year: string
  linkedin_url: string
}

type StudentState = {
  user: User | null
  student: Student | null
  skills: string[]
  profileImage: string | null
  loading: boolean
  error: any
}

/* ================= INITIAL STATE ================= */

const initialState: StudentState = {
  user: null,
  student: null,
  skills: [],
  profileImage: null,
  loading: false,
  error: null,
}

/* ================= FETCH DETAILS ================= */

export const fetchStudentDetails = createAsyncThunk(
  "student/details",
  async (_, { rejectWithValue }) => {
    try {
      const res = await apiClient.get("/st/details")
      return res.data
    } catch (err: any) {
      return rejectWithValue(err?.response?.data || err.message)
    }
  }
)

/* ================= UPDATE PROFILE ================= */

export const updateStudentProfile = createAsyncThunk(
  "student/updateProfile",
  async (payload: any, { rejectWithValue }) => {
    try {
      const res = await apiClient.patch("/st/update", payload)
      return res.data
    } catch (err: any) {
      return rejectWithValue(err?.response?.data || err.message)
    }
  }
)

/* ================= PROFILE IMAGE ================= */

export const fetchProfileImage = createAsyncThunk(
  "student/getProfileImage",
  async (_, { rejectWithValue }) => {
    try {
      const res = await apiClient.get("/u/get/prof-img")
      return res.data.url
    } catch (err: any) {
      return rejectWithValue(err?.response?.data || err.message)
    }
  }
)

export const uploadProfileImage = createAsyncThunk(
  "student/uploadProfileImage",
  async (file: File, { rejectWithValue }) => {
    try {
      const formData = new FormData()
      formData.append("file", file)

      const res = await apiClient.post(
        "/u/update/prof-img",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      )

      return res.data.url
    } catch (err: any) {
      return rejectWithValue(err?.response?.data || err.message)
    }
  }
)

export const deleteProfileImage = createAsyncThunk(
  "student/deleteProfileImage",
  async (_, { rejectWithValue }) => {
    try {
      await apiClient.delete("/u/del/prof-img")
      return null
    } catch (err: any) {
      return rejectWithValue(err?.response?.data || err.message)
    }
  }
)

/* ================= SLICE ================= */

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    clearStudent: (state) => {
      state.user = null
      state.student = null
      state.skills = []
      state.profileImage = null
      state.loading = false
      state.error = null
    },
  },

  extraReducers: (builder) => {
    builder

      /* ===== FETCH DETAILS ===== */
      .addCase(fetchStudentDetails.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchStudentDetails.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload.user
        state.student = action.payload.student
        state.skills = action.payload.skills || []
      })
      .addCase(fetchStudentDetails.rejected, (state, action: any) => {
        state.loading = false
        state.error = action.payload
      })

      /* ===== UPDATE PROFILE ===== */
      .addCase(updateStudentProfile.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(updateStudentProfile.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(updateStudentProfile.rejected, (state, action: any) => {
        state.loading = false
        state.error = action.payload
      })

      /* ===== PROFILE IMAGE ===== */
      .addCase(fetchProfileImage.fulfilled, (state, action) => {
        state.profileImage = action.payload
      })

      .addCase(uploadProfileImage.fulfilled, (state, action) => {
        state.profileImage = action.payload
      })

      .addCase(deleteProfileImage.fulfilled, (state) => {
        state.profileImage = null
      })
  },
})

export const { clearStudent } = studentSlice.actions
export default studentSlice.reducer
