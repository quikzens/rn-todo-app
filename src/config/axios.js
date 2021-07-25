import axios from 'axios'
import data from '../../config'

const { apiUrl } = data

export const API = axios.create({
  baseURL: apiUrl,
})

export const configJSON = {
  headers: {
    'Content-Type': 'application/json',
  },
}
