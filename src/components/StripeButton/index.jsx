import React from 'react'

import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import axios from 'axios'
import { ButtonAction, BuyButton, Form, Slide } from './styles'
const stripePromise = loadStripe(import.meta.env.VITE_PUBLIC_KEY_STRIPE)

const CheckoutForm = (props) => {
  const stripe = useStripe()
  const elements = useElements() // Manage the elements on return (CardElement)
  const baseURLApi = import.meta.env.VITE_BACKEND_BASE_URL

  async function handleSubmit (e) {
    e.preventDefault()
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement) // To get element that you want
    })
    if (!error) {
      // console.log(paymentMethod)
      const { id } = paymentMethod // Extract id transaction

      const response = await axios.post(`${baseURLApi}/api/checkout`,
        {
          orderID: id,
          amount: props.amount / 0.01, // Amount in cents (10000 cents = 100 USD)
          currency: props.currency,
          token: props.token
        })
      if (response) {
        console.log('respuenta en checkout', response)
      }
    } else {
      console.log('Error:', error)
    }
  }
  return (
    <Form onSubmit={handleSubmit}>
      <CardElement />
      <BuyButton>Buy with Stripe</BuyButton>
    </Form>
  )
}

export default function StripeButton (props) {
  const [showSlide, setShowSlide] = React.useState(false)
  return (
    <div>
      <ButtonAction onClick={() => setShowSlide(!showSlide)}>
        <div>
          Checkout with Stripe
        </div>
        <div>
          ${props.amount}
        </div>
      </ButtonAction>
      <Slide show={showSlide}>
        <section>
          <Elements stripe={stripePromise}>
            <CheckoutForm amount={props.amount} />
          </Elements>
        </section>
      </Slide>
    </div>
  )
}
