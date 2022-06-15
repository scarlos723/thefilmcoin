import styled from 'styled-components'
import bgImg from '@/images/aboutUs/bgBannerAboutUs.png'
import { ResponsiveTo } from '@/hooks/useResponsive'
// #12D466
export const Container = styled.div`
  display: grid;
  background: linear-gradient(179.87deg, 
                rgba(196, 196, 196, 0) 10.11%, 
                #000000 114.94%), 
              url(${bgImg}) ;
  background-size: auto, 200%;
  background-repeat: no-repeat;
  background-position-x:0,  -270px;
  width: 100%;
  height: auto;
  background-color: black;
  
  ${ResponsiveTo('md')}{
    
    background: linear-gradient(179.95deg,
                  rgba(196, 196, 196, 0) -7.57%, 
                  rgba(106, 106, 106, 0.2) 13.28%, 
                  #000000 49.71%), 
                url(${bgImg}) ;
    background-size: auto 42%;
    background-repeat: no-repeat;
    background-position-x: 0px , right;
    background-position-y: 200px , top;
  }
  ${ResponsiveTo('lg')}{
    background: linear-gradient(179.95deg,
                  rgba(196, 196, 196, 0) 0%, 
                  rgba(106, 106, 106, 0.2) 22.28%, 
                  #000000 50.71%), 
              url(${bgImg}) ;
    background-size:auto, 122%;
    background-repeat: no-repeat;
    background-position-x: 0px ,right;
    background-position-y: 100px , top;
  }
  ${ResponsiveTo('xl')}{
    background-size:auto, 112%;
    background-position-y: 200px , top;
  }
`
export const Grid = styled.section`
  display: flex;
  width: 100%;
  height: 340px;
  flex-direction: column;
  justify-content: end;
  ${ResponsiveTo('md')}{
    height: auto;
    padding: 120px 108px ;
    gap:72px;
  }
  ${ResponsiveTo('lg')}{
    max-width: 1180px;
    padding: 200px 0 ;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap:0;
  }

`
export const Col1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img{
    width: 120px;
    height: 120px;
  }
  ${ResponsiveTo('md')}{
    align-items: center;
    margin-top: 72px;
    h1{
      margin-top: 0px;
      font-size: 4rem;
    }
  }
  ${ResponsiveTo('lg')}{
    h1{
      text-align: center;
    }
    align-items: right;
  }
`
export const Col2 = styled.div`
  display: flex;
  justify-content: center;
`
export const Submenu = styled.ul`
  display: none;
  ${ResponsiveTo('md')}{
    display: grid;
    color: white;
    grid-template-columns: 220px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 1.1rem;
    line-height: 105%;
    text-transform: uppercase;
    div{
      display: flex;
      flex-direction: column;
      gap: 0;
    }
  }
`
