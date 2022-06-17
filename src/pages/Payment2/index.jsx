import React from 'react'
import Stepper from '@/components/Stepper'
import BannerPayments from '@/components/BannerPayments'

function Payment2() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <BannerPayments>
        <Stepper
            labels={[
              'Payment information',
              'Confirm Payment'
            ]}
            currentStep={0}
          />
      </BannerPayments>
    </>
  )
}

export default Payment2
