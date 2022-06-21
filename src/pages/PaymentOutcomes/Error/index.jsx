import React from 'react'
import { useNavigate } from 'react-router-dom'

import Stepper, { stepStatusOptions } from '@/components/Stepper'
import Seo from '@/components/Seo'

// Styles
import {
  Section,
  ButtonBox,
  PaymentOutcomesGrid
} from '../sharedStyles'

export default function Error() {
  const navigate = useNavigate()

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Seo title='Error Payment' />
      <Section>
        <PaymentOutcomesGrid>
          <Stepper
            labels={[
              'Payment information',
              'Confirm Payment'
            ]}
            currentStep={1}
            currentStepStatus={stepStatusOptions.error}
          />
          <h1 style={{ marginTop: 36 }}>There was an <span style={{ color: '#BD1414' }}>error</span> in your payment</h1>
          <ButtonBox>
            <button className='gray-btn' onClick={() => navigate('/')}>Back Home</button>
            {/* navigate(-1) to come back to payment2 without losing the transaction token */}
            <button className='green-btn' onClick={() => navigate(-1)}>Try Again</button>
          </ButtonBox>
        </PaymentOutcomesGrid>
      </Section>
    </>
  )
}