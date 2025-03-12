import customAxios from "../utils/customAxios"

const host = import.meta.env.VITE_HOST
const coreUrl = import.meta.env.VITE_CORE_URL
// const corePort = import.meta.env.VITE_CORE_PORT
const coreBaseUrl = `http://${host}${coreUrl}`

const boardApi = {
  getAll: () => customAxios.get(`${coreBaseUrl}/boards`),
  getById: (id) => customAxios.get(`${coreBaseUrl}/boards/${id}`),
  create: (body) => customAxios.post(`${coreBaseUrl}/boards`, body),
  update: (id, body) => customAxios.put(`${coreBaseUrl}/boards/${id}`, body),
  delete: (id) => customAxios.delete(`${coreBaseUrl}/boards/${id}`),
}

export default boardApi