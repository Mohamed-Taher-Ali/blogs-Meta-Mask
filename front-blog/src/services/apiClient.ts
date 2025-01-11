import axios from 'axios'

export const apiCLient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
})
