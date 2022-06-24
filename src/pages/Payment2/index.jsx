import React from 'react'
import Seo from '@/components/Seo'
import Stepper from '@/components/Stepper'
import BannerPayments from '@/components/BannerPayments'
import PaymentCheckoutForm from '@/components/PaymentCheckoutForm'

function Payment2 () {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Seo title='Payment Checkout' />
      <BannerPayments>
        <Stepper
          labels={[
            'Payment information',
            'Confirm Payment'
          ]}
          currentStep={1}
        />
        <PaymentCheckoutForm />
      </BannerPayments>
    </>
  )
}

export default Payment2
