import React from 'react'

import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import axios from 'axios'
import { ButtonAction, BuyButton, Form, LoadIcon, Slide, TestButton } from './styles'
import { useNavigate } from 'react-router-dom'
// const stripePromise = loadStripe(import.meta.env.VITE_PUBLIC_KEY_STRIPE)

const CheckoutForm = (props) => {
  const navigate = useNavigate()
  const stripe = useStripe()
  const elements = useElements() // Manage the elements on return (CardElement)
  const baseURLApi = import.meta.env.VITE_API_BASE_URL

  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = React.useState(false)
  async function handleSubmit (e) {
    e.preventDefault()
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement) // To get element that you want
    })
    if (!error) {
      // console.log(paymentMethod)
      setLoading(true)
      const { id } = paymentMethod // Extract id transaction
      try {
        const apiUrl = props.testMode ? '/api/testStripe' : '/api/StripeTransaction'
        const response = await axios.post(`${baseURLApi}${apiUrl}`,
          {
            orderID: id,
            amount: props.amount / 0.01, // Amount in cents (10000 cents = 100 USD)
            currency: props.currency,
            token: props.token
          })
        if (response) {
          setLoading(false)
          if (response.data.message === 'Payment successfull') {
            navigate('/success')
          } else {
            navigate('/error')
          }
        }
      } catch (errorcatch) {
        setLoading(false)
        navigate('/error')
        console.log('Error Catch: ', errorcatch)
        console.log('Error: ', error)
      }
    } else {
      setLoading(false)
      navigate('/error')
      console.log('Error:', error)
    }
  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <CardElement />
        {
          !loading
            ? <BuyButton>Buy with Stripe</BuyButton>
            : <LoadIcon>
              <div />
              <div />
              <div />
            </LoadIcon>
        }

      </Form>

    </div>

  )
}

export default function StripeButton (props) {
  const [showSlide, setShowSlide] = React.useState(false)
  const [testMode, setTestMode] = React.useState(false)
  const stripePromise = loadStripe(import.meta.env.VITE_PUBLIC_KEY_STRIPE)
  const stripeTestPromise = loadStripe(import.meta.env.VITE_PUBLIC_KEY_STRIPE_TEST)
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
          {testMode
            ? <Elements stripe={stripeTestPromise}>
              <CheckoutForm testMode={testMode} amount={props.amount} currency={props.currency} token={props.token}/>
            </Elements>
            : <Elements stripe={stripePromise}>
              <CheckoutForm testMode={testMode} amount={props.amount} currency={props.currency} token={props.token}/>
            </Elements>
          }
        </section>
      </Slide>
      <TestButton>
        <button onClick={() => setTestMode(!testMode)}>
          Test {testMode ? 'on' : 'off'}
        </button>
      </TestButton>
    </div>
  )
}
