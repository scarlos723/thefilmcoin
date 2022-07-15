import axios from 'axios'

const API_BASE_URL = 'https://api.coingecko.com/api/v3/'

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

export const getFliksPrice = async () => {
  const coinId = 'film-coin'

  const response = await axiosInstance.get(
    `coins/${coinId}`
  )
  if (response) return response.data
  throw response
}
