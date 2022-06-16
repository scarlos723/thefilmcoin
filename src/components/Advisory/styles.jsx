import styled from 'styled-components'
import { ResponsiveTo } from '@/hooks/useResponsive'
import linesBg from '@/images/meetOurTeam/linesBg.svg'
import {
  Container,
  Section
} from '../KeyTeam/styles'
import { Bubble } from '@/styles/bubbleStyles'

export const Section2 = styled(Section)`
  background-image: url(${linesBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 140px;
  padding-bottom: 128px;
  ${ResponsiveTo('md')}{
    background-position: center bottom;
  }
  
`
export const ContainerAdv = styled(Container)`
    justify-content: center;
  ${ResponsiveTo('md')} {
    border-bottom: none;
    background-color: transparent;
  }
  ${ResponsiveTo('lg')} {
    max-width: 1108px;
  }
`
export const BubbleAdv = styled(Bubble)`

  ${ResponsiveTo('md')} {
    width: 176px;
    height: 176px;
    gap: 4px;
    h3,p{
      font-size: 0.8rem;
    }
  }

  ${ResponsiveTo('lg')} {
    
  }
`
