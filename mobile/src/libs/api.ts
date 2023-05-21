import axios from 'axios'
import { APP_URL } from '@env'

export const baseURL = APP_URL

export const api = axios.create({ baseURL })
