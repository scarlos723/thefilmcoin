import React from 'react'
import { useNavigate } from 'react-router-dom'

import Stepper from '@/components/Stepper'
import Seo from '@/components/Seo'
// Styles
import {
  Section,
  ButtonBox,
  PaymentOutcomesGrid
} from '../sharedStyles'

export default () => {
  const navigate = useNavigate()

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Seo title='Successful Payment' />
      <Section>
        <PaymentOutcomesGrid>
          <Stepper
            labels={[
              'Payment information',
              'Confirm Payment'
            ]}
            currentStep={2}
          />
          <h1 style={{ marginTop: 36 }}>Your payment has been <span>successful!</span></h1>
          <ButtonBox>
            <button className='gray-btn' onClick={() => navigate('/')}>Back Home</button>
            <button className='green-btn' onClick={() => navigate('/payment1')}>Buy More</button>
          </ButtonBox>
        </PaymentOutcomesGrid>
      </Section>
    </>
  )
}
