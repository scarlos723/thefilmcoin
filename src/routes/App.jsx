
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import FcTemplate from '@/containers/FcTemplate'
// styles
import '@/styles/App.css'
import AboutUs from '../pages/AboutUs'
import Tokenomics from '../pages/Tokenomics'
import Benefits from '../pages/Benefits'
import Productions from '../pages/Productions'

function App () {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FcTemplate />}>
          <Route index element={<Home />} />
          <Route path='aboutus' element={<AboutUs />} />
          <Route path='tokenomics' element={<Tokenomics />} />
          <Route path='benefits' element={<Benefits />} />
          <Route path='productions' element={<Productions />} />
        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App
