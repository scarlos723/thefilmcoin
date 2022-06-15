import styled from 'styled-components'
import { ResponsiveTo } from '@/hooks/useResponsive'

export const Section = styled.section`
  width: 100%;
  padding-top: 70px;
  ${ResponsiveTo('md')} {
    padding-top: 84px;
  }
  ${ResponsiveTo()}{
    padding-top: 164px;
    overflow: hidden;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  h2{
    padding: 0 2rem;
    max-width: 568px;
    margin: 0 auto;
    font-size: 18px;
    line-height: 110%;
  }
  ${ResponsiveTo('md')}{
    h2 {
      padding: 0 4.5rem;
      max-width: 875px;
      font-size: 30px;
    }
  }
  ${ResponsiveTo('xl')}{
    h2{
      padding: 0;
      font-size: 35px;
    }
  }
`

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 440px;
  padding: 0 2rem;
  ${ResponsiveTo('md')} {
    width: 53%;
    max-width: 630px;
    padding: 0;
  }
`
