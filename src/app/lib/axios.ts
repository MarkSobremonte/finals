import axios from 'axios'

export const axiosAPI = axios.create({
  baseURL: process.env.API_BASE_URL || "http://127.0.0.1:8000/api",
  headers: {
    'Authorization': typeof window !== 'undefined' ? `Bearer ${localStorage.getItem("token")}` : '',
  }
})
axiosAPI.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem("token")
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

export default axiosAPI
