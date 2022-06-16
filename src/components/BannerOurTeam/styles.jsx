import styled from 'styled-components'
import bgImg from '@/images/meetOurTeam/bgMeetOurTeam.png'
import { ResponsiveTo } from '@/hooks/useResponsive'

export const Container = styled.div`
  width: 100%;
  height: 400px;
  background: black;
  background: linear-gradient(360deg, 
              #000000 0%, 
              rgba(0, 0, 0, 0.71) 40.25%
              , rgba(196, 196, 196, 0) 92.51%),
              url(${bgImg});
  background-size: cover, 180%;
  background-repeat: no-repeat, no-repeat;
  background-position-x: center , center;
  background-position-y: center , top;
  padding: 0 20px;
  ${ResponsiveTo('md')}{
    background: linear-gradient(360deg, 
              #000000 0%, 
              rgba(0, 0, 0, 0.71) 50.25%
              , rgba(196, 196, 196, 0) 92.51%),
              url(${bgImg});
              background-repeat: no-repeat, no-repeat;
    background-size: cover, 130%;
    background-position-x: center , 48%;
    background-position-y: 0px , top;
    
    padding: 100px 0;
    height: 780px;
  }
  ${ResponsiveTo('lg')}{
    background-image:linear-gradient(0deg, #000000 10%, rgba(0, 0, 0, 0.49) 50.67%, rgba(196, 196, 196, 0) 100%),url(${bgImg}) ;
    background-size: cover, 110%;
    background-repeat: no-repeat, no-repeat;
    background-position-x: center , left;
    background-position-y: 0px , top;
    height: 80vh;
    padding: 0;
    display: grid;
  }
  ${ResponsiveTo('xl')}{
    background-size: cover, cover ;
  }
`
export const Grid = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  place-content: center;
  
  padding-top: 40px;
  place-self: center;
  ${ResponsiveTo('lg')}{
    width: 85%;
    max-width: 1159px;
    grid-template-columns: 4fr 1fr;
    place-content: center;
    place-items: start;
    height: 100%;
    margin: 0;
  }
`

export const TextBox = styled.div`
  display: grid;  
  place-items: center;
  padding: 0 20px;
  gap: 8px;
  img{
    width: 58px;
    height: 58px;
  }
  ${ResponsiveTo('md')}{
    padding: 0 180px;
    img{
      width: 83px;
      height: 83px;
    }
  }
  ${ResponsiveTo('lg')}{
    padding: 0 80px;
    height: 196px;
    margin: auto 0;
    
  }
`
export const SubmenuBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  place-content: center;
  place-items: center;
  width: 100%;
  display: none;
  ${ResponsiveTo('md')}{
    margin-top: 100px;
    display: grid;
  }
`
export const Submenu1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${ResponsiveTo('md')}{
    width: 215px;
  }
`
