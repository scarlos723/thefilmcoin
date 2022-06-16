import styled from 'styled-components'
import { Container } from '../BannerOurTeam/styles'
import imgBg from '@/images/ambassadors/bannerAmbassadors.png'
import { ResponsiveTo } from '@/hooks/useResponsive'
export const ContainerB = styled(Container)`
  background:linear-gradient(360deg, #000000 0%, rgba(196, 196, 196, 0) 83.21%), url(${imgBg});
  background-repeat: no-repeat;
  background-size: cover, 200%;
  background-position-x: center;
  background-position-y:center, 0;
  height: auto;
  ${ResponsiveTo('md')}{
    background-size: cover, 120%;
    background-position-x: center;
    background-position-y:center, 0;
  }
  ${ResponsiveTo('lg')}{
    background-size: cover, 130%;
    background-position-x: center;
    background-position-y: 0, -20px;
  
  }
  ${ResponsiveTo('xl')}{
    background-size: cover, cover;
  }
`
export const GridB = styled.div`
  width: 100%;
  height: 320px;
  display: flex;
  align-items: end;
  justify-content: center;
  ${ResponsiveTo('md')}{
    height: 452px;
  }
  ${ResponsiveTo('lg')}{
    height: 596px;
    margin: 0 auto;
    margin-top: 100px;
    
    max-width: 1159px;
  }
  
`
