import styled from 'styled-components'
import { ResponsiveTo } from '@/hooks/useResponsive'
import { Container, Section } from '../KeyTeam/styles'
import imgCoin1 from '@/images/meetOurTeam/coinsGeneration1.svg'
import imgCoin2 from '@/images/meetOurTeam/coinsGeneration2.svg'
import {
  Bubble
} from '@/styles/bubbleStyles'

export const Section1 = styled(Section)`
  ${ResponsiveTo('lg')} {
    background: url(${imgCoin1}), url(${imgCoin2});
    background-size: auto;
    background-repeat: no-repeat;
    background-position-x: left, right ;
    background-position-y:84%, 84% ;
  }
  ${ResponsiveTo('xxl')} {
    background-position-x: 5%,95% ;
  }
`
export const Container1 = styled(Container)`
  background-color: transparent;
  justify-content: center;
  ${ResponsiveTo('lg')} {
    max-width: 1108px;
  }
  ${ResponsiveTo('xl')} {
    justify-content: center;
  }
`
export const BubbleOp = styled(Bubble)`
  width: 164.11px;
  height: 163.43px; 
  gap: 4px;
  h3,p{
    font-size: 0.9rem;
    line-height: 100%;
  }
  h3{
    letter-spacing: -0.05em;
  }
  ${ResponsiveTo('Tablet')} {
    width: 177px;
    height: 177px;
    h3,p{
      font-size: 1rem;
      line-height: 20px;
    }
    p{
      letter-spacing: -0.05em;
    }
  }
`
