import styled from 'styled-components'
import coins1 from '@/images/tokenomics/coinSecondGraph1.svg'
import coins2 from '@/images/tokenomics/coinSecondGraph2.svg'
import coins3 from '@/images/tokenomics/coinSecondGraph3.svg'
import { ResponsiveTo } from '@/hooks/useResponsive'

export const Section = styled.div`
  width: 100%;
  position: relative;
`
export const ImgCoins1 = styled.div`
  display: none;
  ${ResponsiveTo('lg')}{
  position: absolute;
  width: 188.07px;
  height: 240.46px;
  background-image: url(${coins1});
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 2;
  top: 0;
  left: 120px;
  }
`
export const ImgCoins2 = styled(ImgCoins1)`
  ${ResponsiveTo('lg')}{
  background-image: url(${coins2});
  width: 137.86px;
  height: 114.86px; 
  top:0;
  left: unset;
  right: 80px;
  }
`

export const ImgCoins3 = styled(ImgCoins2)`
  ${ResponsiveTo('lg')}{
    background-image: url(${coins3});
    width: 92.12px;
    height: 92.12px;
    top: unset;
    bottom: 20px;
  }
`

export const Container = styled.section`
  width: 100%;
  max-width: 1244px;
  margin: 0 auto;
  padding: 3rem 0;
`
