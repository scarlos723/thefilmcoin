import React from 'react'
import {
  Container,
  Content,
  GoalsSection,
  LogoImage,
  Title
} from './styles'
import Logo from '@/images/aboutUs/logoNeon.png'
import lineBottom from '@/images/aboutUs/bottomGlobalSolution.svg'
import NFTSection from '@/components/NFTSection'
export default function Disrupting () {
  return (
    <GoalsSection>
      <Container>
        <LogoImage src={Logo} />
        <Title>
        We&apos;re Disrupting The Traditional Markets
        of Film And Television
        </Title>
        <Content>
        The immediate goal of The FILM<span>COIN</span> is
        to be a market disruptive cryptocurrency
        of choice, primarily used to underpin
        a new set of non-fungible
        film and television standards.
        </Content>
      </Container>
      <NFTSection />
      <div className='bottom-line-container'>
        <img src={lineBottom} alt='bottom line image' />
      </div>
    </GoalsSection>
  )
}
