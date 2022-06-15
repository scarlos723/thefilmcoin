import styled from 'styled-components'
import bgImg from '@/images/bannerHome/bgBannerHome.png'
import { ResponsiveTo } from '@/hooks/useResponsive'
export const Section = styled.section`
  display: grid;
  width: 100%;
  height: auto;
  padding-top: 40px;
  background-color: black;
  background: linear-gradient(180.05deg, rgba(255, 255, 255, 0) 0.05%, #000000 67.34%), url(${bgImg}), black;
  background-size: auto, 220%, auto;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: 100px, 0;
  
  ${ResponsiveTo('md')}{
    background: linear-gradient(180.05deg, 
                  rgba(255, 255, 255, 0) 0.05%, 
                  #000000 67.34%), 
                url(${bgImg}), 
                black;
    background-repeat: no-repeat;
    background-size: auto, 120%, auto;
    background-position-x: center, right, 0;
    background-position-y: center,40px, 0;
    margin-bottom: 60px;
    
  }
  ${ResponsiveTo('lg')}{
    background: linear-gradient(2.22deg, 
                  #000000 17.28%, 
                  rgba(196, 196, 196, 0) 51.44%, 
                  rgba(196, 196, 196, 0) 98.13%), 
                url(${bgImg}), 
                black;
    place-items: center;
    background-repeat: no-repeat;
    background-size: cover, cover;
    background-position-x: center;
  }
`
export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 400px;
  justify-content: flex-end;
  align-items: center;
  
  ${ResponsiveTo('md')}{
    height: 940px;
    gap: 10px;
    
  }
  ${ResponsiveTo('lg')}{
    display: grid;
    place-content: center;
    place-items: center;
    grid-template-columns: 451px 1fr;
    padding-top:100px;
    height: 678px;
    width: 70%;
    max-width: 700px;
    div:nth-child(1), div:nth-child(2){
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: end;
    }
    div:nth-child(2){
      padding-left:  90px; 
    }
  }
  ${ResponsiveTo('xl')}{
    max-width: 868px;
    grid-template-columns: 466px 1fr;
  }

`
export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  h1{
    font-size: 14px;
    line-height: 100%;
  }
  h1:nth-child(2){
    font-size: 12.2px;
  }
  h2{
    font-size: 15.5px;
    line-height: 116.5%;
  }
  p{
    font-size: 7.6px;
    line-height: 9px;
    text-transform: uppercase;
  }
  ${ResponsiveTo('md')}{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
    h1{
      font-size: 24.5px;
    }
    h1:nth-child(2){
      font-size: 21.3px;
    }
    h2{
      font-size: 27.2px;
    }
    p{
      font-size: 13.3px;
      line-height: 16px;
    }
  }
  

`

export const Submenu = styled.ul`
  display: none;
  ${ResponsiveTo('md')}{
    display: grid;
    //grid-template-columns: 1fr 1fr;
    gap: 16px;
    place-content: center;
    width: 164px;
  }
  ${ResponsiveTo('lg')}{
    place-content: unset;
  }
  ${ResponsiveTo('xl')}{
    width: 172px;
  }
`
export const LiSubmenu = styled.li`
  display: flex;
  align-items: center;
  border-bottom: solid 0.5px #12D466;
  p{
    width: 100%;
    cursor: pointer;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: -0.05em;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    span{
      color: #12D466;
    }
  }

  ${ResponsiveTo('md')}{
    padding: 1rem 0;
    p {
      text-align: center;
    }
  }
  ${ResponsiveTo('lg')}{
    p {
      text-align: right;
    }
  }
  ${ResponsiveTo('xl')}{
    p {
      font-size: 15px;
      line-height: 18px;
    }
  }
`
