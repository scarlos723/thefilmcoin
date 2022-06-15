
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import FcTemplate from '@/containers/FcTemplate'
// styles
import '@/styles/App.css'

function App () {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FcTemplate />}>
          <Route index element={<Home />} />
        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App
