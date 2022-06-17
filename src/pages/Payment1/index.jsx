import React from 'react'
import Stepper from '@/components/Stepper'
import BannerPayments from '@/components/BannerPayments'
import PaymentOptions from '@/components/PaymentOptions'
import PaymentContactInfoForm from '@/components/PaymentContactInfoForm'

function Payment1() {
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
      <PaymentOptions />
      <PaymentContactInfoForm />
    </>
  )
}

export default Payment1
