import axios from "axios"
import { API_BASE } from "@/lib/api"

const apiClient = axios.create({
  baseURL: API_BASE,
})

apiClient.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("access_token")

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
  },
  (error) => Promise.reject(error)
)
let isRefreshing = false
let failedQueue: any[] = []

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) prom.reject(error)
    else prom.resolve(token)
  })
  failedQueue = []
}

apiClient.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config

    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({
            resolve: (token: string) => {
              originalRequest.headers.Authorization = `Bearer ${token}`
              resolve(apiClient(originalRequest))
            },
            reject,
          })
        })
      }

      originalRequest._retry = true
      isRefreshing = true

      try {
        const refreshToken = localStorage.getItem("refresh_token")
        if (!refreshToken) throw new Error("No refresh token")

        const res = await axios.post(
          `${API_BASE}/auth/refresh`,
          { refresh_token: refreshToken }
        )

        const { access_token, refresh_token } = res.data
        localStorage.setItem("access_token", access_token)
        localStorage.setItem("refresh_token", refresh_token)

        apiClient.defaults.headers.Authorization = `Bearer ${access_token}`

        processQueue(null, access_token)

        originalRequest.headers.Authorization = `Bearer ${access_token}`
        return apiClient(originalRequest)
      } catch (err) {
        processQueue(err, null)
        localStorage.removeItem("access_token")
        localStorage.removeItem("refresh_token")
        window.location.href = "/login"

        return Promise.reject(err)
      } finally {
        isRefreshing = false
      }
    }

    return Promise.reject(error)
  }
)

export default apiClient
