import styled from 'styled-components'
import { ResponsiveTo } from '@/hooks/useResponsive'

export const BgGradient = styled.div`
  background-color: black;
  ${ResponsiveTo('md')} {
    background:   radial-gradient(39.64% 47.25% at 0 47.25%, rgba(10, 128, 61, 0.6) 0%, rgba(0, 0, 0, 0) 100%),
                  radial-gradient(39.64% 47.25% at 98.39% 47.25%, rgba(10, 128, 61, 0.6) 0%, rgba(0, 0, 0, 0) 100%);
    background-repeat: no-repeat;
    background-size: 1280px 1122px;
    background-position-x: left, right;
    background-position-y: top, bottom;
  }
`
