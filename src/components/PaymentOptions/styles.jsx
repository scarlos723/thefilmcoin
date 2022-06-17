


import styled from 'styled-components'
import { ListingContainer } from '@/components/Exchanges/styles'
import { ResponsiveTo } from '@/hooks/useResponsive'

export const Section = styled.section`
  width: 100%;
  padding: 4rem 1rem 1.25rem;
  h2 {
    line-height: 116.5%;
    letter-spacing: -0.05em;
    max-width: 646px;
    margin: 0 auto;
  }
  ${ResponsiveTo('md')} {
    padding: 6rem 3.25rem 1.25rem;
  }
  ${ResponsiveTo('lg')} {
    padding: 6rem 10.5rem 5rem;
    max-width: 1600px;
    margin: 0 auto;
    h2 {
      max-width: 1108px;
    }
  }
`

export const Hr = styled.hr`
  width: 100%;
  border: 0;
  border-bottom: 0.5px solid #12D466;
  margin: 0;
`

export const Separator = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3.5rem 0;
  color: #12D466;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  span {
    margin: 0 0.75rem;
  }
  ${ResponsiveTo('md')} {
    font-size: 20px;
    line-height: 24px;
    span {
      margin: 0 2.25rem;
    }
  }
`

export const ExchangeOptions = styled(ListingContainer)`
  display: grid;
  grid-template-columns: 150px;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  margin: 3.5rem 0;
  ${ResponsiveTo('md')} {
    margin: 5rem 0;
  }
  ${ResponsiveTo('lg')} {
    grid-template-columns: repeat(3, 150px);
    gap: 6rem;
  }
  ${ResponsiveTo('xl')} {
    gap: 9rem;
  }
`
