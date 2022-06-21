
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FcTemplate from '@/containers/FcTemplate'
// styles
import '@/styles/App.css'
import Home from '@/pages/Home'
import AboutUs from '@/pages/AboutUs'
import Tokenomics from '@/pages/Tokenomics'
import Benefits from '@/pages/Benefits'
import Productions from '@/pages/Productions'
import MeetOurTeam from '@/pages/MeetOurTeam'
import Ambassadors from '@/pages/Ambassadors'
import Contact from '@/pages/Contact'
import Payment1 from '@/pages/Payment1'
import Payment2 from '@/pages/Payment2'
import Error from '@/pages/PaymentOutcomes/Error'
import Success from '@/pages/PaymentOutcomes/Success'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FcTemplate />}>
          <Route index element={<Home />} />
          <Route path='aboutus' element={<AboutUs />} />
          <Route path='tokenomics' element={<Tokenomics />} />
          <Route path='benefits' element={<Benefits />} />
          <Route path='productions' element={<Productions />} />
          <Route path='ourteam' element={<MeetOurTeam />} />
          <Route path='ambassadors' element={<Ambassadors />} />
          <Route path='contact' element={<Contact />} />
          <Route path='payment1' element={<Payment1 />} />
          <Route path='payment2' element={<Payment2 />} />
          <Route path='error' element={<Error />} />
          <Route path='success' element={<Success />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
