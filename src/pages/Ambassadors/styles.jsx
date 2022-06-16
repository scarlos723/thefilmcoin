import styled from 'styled-components'
import bgImg from '@/images/ambassadors/bgImg.png'
import { ResponsiveTo } from '@/hooks/useResponsive'

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    max-width: 286px;
    align-items: center;
    flex-flow: row wrap;
    gap: 20px 12px;
    margin: 0 auto;
    padding: 20px 0px;
    ${ResponsiveTo('md')}{
      gap:72px 40px;
      max-width: 640px;
      justify-content: space-between;
    }
    ${ResponsiveTo('lg')}{
      gap:108px 66px;
      max-width: 810px;
    }
    ${ResponsiveTo('xl')}{
      gap:180px 66px;
      max-width: 1102px;
    }
`
export const Title = styled.h2`
  margin-top: 78px;
  margin-bottom: 74px;
  padding: 0 40px;
  ${ResponsiveTo('md')}{
    padding: 0 ;
    margin-top: 28px;
    margin-bottom: 122px;
  }
`
export const SectionBackground = styled.div`
  background: radial-gradient(39.64% 47.25% at 98.39% 47.25%,
              rgba(10, 128, 61, 0.6) 0%, 
                rgba(0, 0, 0, 0) 100%),
              radial-gradient(39.64% 47.25% at 0 47.25%,
              rgba(10, 128, 61, 0.6) 0%, 
                rgba(0, 0, 0, 0) 100%), url(${bgImg}) ;
  background-size: 0 0,  0 0 , contain;
  background-repeat: no-repeat;
  background-position-x: right, left, center;
  background-position-y: top, bottom, bottom;
  padding-bottom: 292px;
  ${ResponsiveTo('md')}{
    background-size: 1280px 1122px,  1280px 1122px , 459px 358px;
    background-position-x: right, left, right;
    padding-bottom: 24px;
  }
  ${ResponsiveTo('lg')}{
    background-size: 1280px 1122px,  1280px 1122px , 663px 516px;
    padding-bottom: 92px;
  }
  ${ResponsiveTo('xl')}{
    background-size: 1280px 1122px,  1280px 1122px ,auto;
    padding-bottom: 172px;
  }
`
