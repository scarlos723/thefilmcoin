import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

export async function sendContactInfo (data) {
  const formattedData = {
    ...data,
    phone: data.phone || '0000000',
    address: data.address || 'street',
    // Default values
    city: 'NaN',
    country: 'A',
    kycDocumnet: null,
    province: 'B',
    wallet: 'NaN',
    zipcode: 'NaN'
  }

  const response = await axiosInstance.post(
    '/api/sendinfo',
    formattedData
  )
  if (response.data.msg === 'ok') return response.data
  throw response
}

export async function sendPaymentInfo (data) {
  const response = await axiosInstance.post(
    '/api/paypaltransaction',
    data
  )

  if (response.data.msg === 'ok') return response.data
  throw response
}
