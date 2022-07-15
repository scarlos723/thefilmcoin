import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
// Components
import Switch from '@/components/Switch'
// Styles
import { Section, Container, Form, Title, Input, Error, TotalContainer, Button, ButtonsContainer, InfoPriceContainer } from './styles'
// Form
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import getPaymentCheckoutSchema from './schema'

import StripeButton from '../StripeButton'
import { getFliksPrice } from '../../services/apiCoinGecko'
import { useCountLimit } from '../../hooks/useCountLimit'

export default function PaymentCheckoutForm () {
  const location = useLocation()
  const [options, setOptions] = useState([
    {
      name: 'USD',
      value: 0.09,
      prefix: '$',
      min: 100,
      minTokens: 1112
    },
    {
      name: 'GBP',
      value: 0.07,
      prefix: '£',
      min: 80,
      minTokens: 1143
    }
  ])
  const history = useNavigate()
  const [currency, setCurrency] = useState(options[0])
  const [transactionToken, setTransactionToken] = useState('')

  const { register, watch, formState: { errors } } = useForm({
    mode: 'all',
    resolver: yupResolver(getPaymentCheckoutSchema({ currency }))
  })

  const watchTokenAmount = watch('tokenAmount')

  const _handleSwitch = () => {
    currency === options[0]
      ? setCurrency(options[1])
      : setCurrency(options[0])
  }

  const total = (watchTokenAmount * currency.value).toFixed(2)

  async function handlerGetFliksPrice () {
    try {
      const fliksPrice = await getFliksPrice()
      const usdPrice = fliksPrice.market_data.current_price.usd
      const gbpprice = fliksPrice.market_data.current_price.gbp
      if (fliksPrice) {
        setOptions([
          {
            name: 'USD',
            value: usdPrice,
            prefix: '$',
            min: 100,
            minTokens: 1112
          },
          {
            name: 'GBP',
            value: gbpprice,
            prefix: '£',
            min: 80,
            minTokens: 1143
          }
        ])
      }
    } catch (error) {
      console.log(error)
    }
  }

  const counterRef = useCountLimit({
    minsLimit: 3,
    handlerGetFliksPrice
  })
  useEffect(() => {
    handlerGetFliksPrice()
    const params = new URLSearchParams(location.search)
    const q = params.get('token')
    setTransactionToken(q)
  }, [])

  return (
    <Section>
      <Container>
        <InfoPriceContainer>
          <section>
            <div>
              <p>FLIKS price:</p>
              <p>
                USD: {options[0].value}
              </p>
              <p>
                GBP: {options[1].value}
              </p>
            </div>

            <small>The price will be updated in <span ref={counterRef} /></small>
          </section>
          <a
            href="https://www.coingecko.com/">Information from <span>CoinGecko</span></a>
        </InfoPriceContainer>
        <Form noValidate>
          <Switch
            handleSwitch={_handleSwitch}
            options={options}
            currentValue={currency}
          />
          <Title>Total Film<em>Coin</em> Tokens</Title>
          <Input
            type='number'
            placeholder={`Min. tokens ${currency.minTokens}`}
            {...register('tokenAmount')}
          />
          {errors.tokenAmount && <Error role='alert'>{errors.tokenAmount.message}</Error>}
          <TotalContainer>
            <p>Payment Total</p>
            <p>{currency.prefix}{total}</p>
          </TotalContainer>

          <Button
            onClick={() => history('/')}
            variant='secondary'
          >
            Cancel
          </Button>
        </Form>
        <ButtonsContainer>
          {total >= currency.min && (
            <>
              <div>
                <StripeButton amount={total} currency={currency.name} token={transactionToken}/>
              </div>
              <form action='https://www.coinpayments.net/index.php' method='post' target='_blank' style={{ width: '100%' }}>
                <input type='hidden' name='cmd' value='_pay' />
                <input type='hidden' name='reset' value='1' />
                <input type='hidden' name='merchant' value={import.meta.env.VITE_COINPAYMENTS_MERCHANT_ID || ''} />
                <input type='hidden' name='item_name' value='FilmCoin' />
                <input type='hidden' name='invoice' value={transactionToken || ''} />
                <input type='hidden' name='currency' value={currency.name} />
                <input type='hidden' name='amountf' value={currency.value} />
                <input type='hidden' name='quantity' value={watchTokenAmount} />
                <input type='hidden' name='allow_quantity' value='0' />
                <input type='hidden' name='want_shipping' value='0' />
                <input type='hidden' name='success_url' value='https://thefilmcoin.io/#/success' />
                <input type='hidden' name='allow_extra' value='0' />
                <input type='image' src='https://www.coinpayments.net/images/pub/buynow-wide-yellow.png' alt='Comprar ahora con CoinPayments.net' style={{ display: 'block', width: '100%' }} />
              </form>
            </>
          )}
        </ButtonsContainer>
      </Container>
    </Section>
  )
}
