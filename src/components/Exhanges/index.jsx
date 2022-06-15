import React from 'react'
// styles
import {
  Section,
  Title,
  SubTitle,
  ListingContainer,
  OurExchanges,
  FutureContainer,
  BoxFutureExchanges
} from './styles'
import conistore from '@/images/home/conistore.png'
import fmfw from '@/images/home/fmfw.png'
import uniswap from '@/images/home/uniswap.png'

// Potential Exchanges /Images
import crypto from '@/images/home/crypto.png'
import binance from '@/images/home/binance.png'
import coinbase from '@/images/home/coinbase.png'
export default function Exchanges () {
  return (
    <Section>
      <Title>Exchanges</Title>
      <OurExchanges>
        <SubTitle>Our Exchanges </SubTitle>
        <ListingContainer>
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
        </ListingContainer>
      </OurExchanges>
      <BoxFutureExchanges>
        <SubTitle>Future Exchanges</SubTitle>
        <FutureContainer>
          <img src={crypto} alt='crypto.com logo' />
          <img src={coinbase} alt='coinbase logo' />
          <img src={binance} alt='binance logo' />
        </FutureContainer>
      </BoxFutureExchanges>
    </Section>
  )
}
