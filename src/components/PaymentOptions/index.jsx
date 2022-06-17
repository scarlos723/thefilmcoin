import { ExchangeOptions, Hr, Section, Separator } from './styles'
// Listing Exchanges Images
import conistore from '@/images/home/conistore.png'
import fmfw from '@/images/home/fmfw.png'
import uniswap from '@/images/home/uniswap.png'

export default function PaymentOptions () {
  return (
    <Section>
      <h2>
        Make your payment using our
        <span> allowed</span> Exchanges
      </h2>
      <ExchangeOptions>
        <a
          href='https://app.uniswap.org/#/swap?inputCurrency=0x9280abf1af455d6228def9c93b5e6d85f3f1ecc8&chain=mainnet'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={uniswap} alt='Uniswap Logo' />
        </a>
        <a
          href='https://fmfw.io/fliks-to-usdt'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={fmfw} alt='Fmfw Logo' />
        </a>
        <a
          href='https://h5.coinstore.com/index'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={conistore} alt='Coinstore Logo' />
        </a>
      </ExchangeOptions>
      <Separator>
        <Hr />
        <span>Or</span>
        <Hr />
      </Separator>
      <h2>
        buy fliks with your <span>cryptocurrency</span>
      </h2>
    </Section>
  )
}
