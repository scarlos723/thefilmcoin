import styled from 'styled-components'

import imgCoin1 from '@/images/meetOurTeam/coinsGeneration1.svg'
import imgCoin2 from '@/images/meetOurTeam/coinsGeneration2.svg'
import { ResponsiveTo } from '@/hooks/useResponsive'
import { Grid } from '@/components/BannerPayments/styles'


export const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: grid;
  place-content: center;
  background: black;
  ${ResponsiveTo('md')}{
    background: /* url(${imgCoin1}), 
                url(${imgCoin2}), */
                radial-gradient(64.23% 44.87% at 0% 51.21%, 
                  rgba(10, 128, 61, 0.6) 0%, 
                  rgba(0, 0, 0, 0) 100%) , 
                
                black;
    background-size: 30%, 30% , auto, auto;
    background-repeat: no-repeat;
    background-position: 0 20% , 100% 60% ,center center, center center;
    /* background-size: auto; */
  }
`

export const ButtonBox = styled.div`
  display:flex;
  margin-top: 52px;
  justify-content: space-between;
  width: 80%;
  max-width:373px;
`

export const PaymentOutcomesGrid = styled(Grid)`
  margin-top: 0;
  padding-top: 0;
`