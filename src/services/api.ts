import axios from 'axios'
import { SnackData } from './../interfaces/SnackData'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

export const getBurgers = () => api.get<SnackData[]>('/burgers')
export const getPizzas = () => api.get('/pizzas')
export const getDrinks = () => api.get('/drinks')
export const getIceCreams = () => api.get('/ice-creams')

export default api
