import styled from 'styled-components'
import bgImg from '@/images/home/imgNftSection.png'
import { ResponsiveTo } from '@/hooks/useResponsive'
export const Container = styled.div`
  width: 100%;
  height: 290px;
  background-color: black;
  background-image: url(${bgImg});
  background-size: 160%;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  ${ResponsiveTo('md')}{
    height: 313.5px;
    background-size: cover;
  }
  ${ResponsiveTo('lg')}{
    height: 418px; 
  }
  ${ResponsiveTo('xl')}{
    height: 522.36px;
  }
  ${ResponsiveTo('xxl')}{
    background-size:  1024px;
  }
`
