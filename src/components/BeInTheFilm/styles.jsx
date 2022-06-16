import styled from 'styled-components'
import bgImg from '@/images/productions/bgBeIn.png'
import { ResponsiveTo } from '@/hooks/useResponsive'
export const Container = styled.div`
  background-color: black;
  background:   linear-gradient(270deg, #000000 -5.1%, #000000 -60.97%, rgba(0, 0, 0, 0) 100%), url(${bgImg});
  background-repeat: no-repeat;
  background-size:auto, 170%;
  ${ResponsiveTo('md')}{
    background-size: 100%;
    background-position-x: -200px;
    background: linear-gradient(270deg, #000000 -5.1%, #000000 12.97%, rgba(0, 0, 0, 0) 100%), url(${bgImg});
    background-repeat: no-repeat;
  }
  ${ResponsiveTo('lg')}{
    background-size: 90%;
  }
`
export const Grid = styled.div`
  display: grid;
  place-content: center;

  padding: 0 32px;
  ${ResponsiveTo('md')}{
    padding: 0;
    grid-template-columns: 1fr 1fr;
    max-width: 673px;
    margin: 0 auto;
  }
  ${ResponsiveTo('lg')}{
    grid-template-columns: 2fr 1fr;
    max-width: 1098px;
  }
`
export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  color: #FFFFFF;
  margin-top: 280px;
  margin-bottom: 40px;
  gap: 27px;

  p{
    a{
    text-decoration: none;
    color: #BE0D0D;
  }
  }
  img{
    width: 63px;
    height: 29px;
  }
  ${ResponsiveTo('md')}{
    margin: 80px 0;
    //padding-right: 40px;
  
  }
  ${ResponsiveTo('lg')}{
    margin: 100px 0;
    //padding-right: 150px;
    
  }
`
