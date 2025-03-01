import axios from 'axios'
import api from '../api'

// const host = import.meta.env.VITE_HOST
// const port = import.meta.env.VITE_AUTH_PORT

// const refreshTokenUrl = `http://${host}:${port}/auth/refresh-token`

const customAxios = axios.create({
  // baseURL: 'http://your-backend-url.com/api',
  // withCredentials: true,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})


// Request Interceptor: Tự động gắn token vào header
customAxios.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken')
    console.log('accessToken', accessToken)
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response Interceptor: Xử lý lỗi 401 và refresh token
customAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config
    if (
      error.response?.status === 401 
      && !originalRequest._retry
    ) {
      originalRequest._retry = true // Đảm bảo không lặp vô hạn

      try {
        // Gọi API refresh token
        const refreshToken = localStorage.getItem('refreshToken')
        const response = await api.auth.refreshToken({ refreshToken })

        // Lưu token mới
        const { accessToken, refreshToken: newRefreshToken } = response.data
        localStorage.setItem('accessToken', accessToken)
        localStorage.setItem('refreshToken', newRefreshToken)

        // Gắn token mới và gửi lại request ban đầu
        originalRequest.headers['Authorization'] = `Bearer ${accessToken}`
        return customAxios(originalRequest)
      } catch (refreshError) {
        console.error('Refresh token failed: ', refreshError)
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        window.location.href = '/login'
      }
    }
    else if (error.response?.status === 403) {
      // Xử lý lỗi 403: Quyền truy cập bị từ chối
      console.error('Access forbidden: ', error.response.data)
      // Chuyển hướng đến trang lỗi "Forbidden"
      window.location.href = '/forbidden'
    }

    return Promise.reject(error)
  }
)

export default customAxios
