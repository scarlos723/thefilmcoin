import React from 'react'
import ReactDOM from 'react-dom'
import { CookiesProvider } from "react-cookie";
import App from './routes/App'
import './styles/index.css'
import '@/fonts/stylesheet.css'

const rootElement = document.getElementById('root')

ReactDOM.render(
  <CookiesProvider>
    <App />
  </CookiesProvider>,
  rootElement
)
