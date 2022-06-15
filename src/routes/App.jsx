
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import FcTemplate from '@/containers/FcTemplate'
// styles
import '@/styles/App.css'
import AboutUs from '../pages/AboutUs'

function App () {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FcTemplate />}>
          <Route index element={<Home />} />
          <Route path='aboutus' element={<AboutUs />} />
        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App
