import styled from 'styled-components'
import { ResponsiveTo } from '@/hooks/useResponsive'

export const BgGradientMobile = styled.div`
  background: black radial-gradient(181.07% 55.88% at 195.37% 62.87%, rgba(10, 128, 61, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%);
  ${ResponsiveTo('lg')}{
    background: transparent;
  }
`

export const BgFirstGradient = styled.div`
  ${ResponsiveTo('lg')} {
    background: black radial-gradient(84.23% 24.87% at 0% 51.21%, rgba(10, 128, 61, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%);
    background-position: 0 60%;
    background-repeat: no-repeat;
  }
  ${ResponsiveTo('xxl')}{
    background-position: 0 70%;
  }
`

export const BgSecondGradient = styled.div`
  ${ResponsiveTo('lg')} {
    background: black radial-gradient(61.82% 40.62% at 0% 55.96%, rgba(10, 128, 61, 0.6) 0%, rgba(0, 0, 0, 0.6) 77.72%);
    background-position: 0 60%;
    background-repeat: no-repeat;
  }
`
