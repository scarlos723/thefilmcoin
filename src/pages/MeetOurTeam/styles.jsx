import styled from 'styled-components'
import { ResponsiveTo } from '@/hooks/useResponsive'

export const BackGroundSection = styled.div`
  ${ResponsiveTo('lg')}{
    //background-color: blue;
    background: radial-gradient(84.23% 24.87% at 0% 51.21%, rgba(10, 128, 61, 0.6) 0%, rgba(0, 0, 0, 0) 100%) ;
    background-size: 1238px 2886px;
    background-repeat: no-repeat;
    background-position-y: 50%;
  }
`
