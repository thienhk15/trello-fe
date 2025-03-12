import customAxios from "../utils/customAxios"

const host = import.meta.env.VITE_HOST
// const port = import.meta.env.VITE_AUTH_PORT
const auth_url = import.meta.env.VITE_AUTH_URL
const AuthBaseUrl = `http://${host}${auth_url}`

const authApi = {
  login: (body) => customAxios.post(`${AuthBaseUrl}/auth/login`, body),
  register: (body) => customAxios.post(`${AuthBaseUrl}/auth/register`, body),
  refreshToken: (body) => customAxios.post(`${AuthBaseUrl}/auth/refresh-token`, body),
}

export default authApi