import styled from 'styled-components'
import bgImg from '@/images/tokenomics/bgTokenomicsBanner.png'
import { ResponsiveTo } from '@/hooks/useResponsive'
export const Section = styled.section`
  display: grid;
  width: 100%;
  height: 50vh;
  background: linear-gradient(0deg, 
                #000000 30%, 
                rgba(196, 196, 196, 0) 62.58%),
              url(${bgImg}) ;
  background-repeat: no-repeat,  no-repeat;
  background-size:contain , 180%;
  background-position-x:center, center;
  background-position-y: center,-10px ;
  background-repeat:no-repeat;
  ${ResponsiveTo('md')}{
    background-color: black;
    background: linear-gradient(0deg, 
                #000000 40%, 
                rgba(196, 196, 196, 0) 90.58%),
              url(${bgImg}) ;
    background-repeat: no-repeat,  no-repeat;
    background-size: contain, 150%;
    background-position-x: 0px, 45%;
    background-position-y: 100px,-20px;
    padding: 80px 0;
    height:60vh;
  }
  ${ResponsiveTo('lg')}{
    background: linear-gradient(0deg, 
                #000000 0%, 
                rgba(196, 196, 196, 0) 60.58%),
              url(${bgImg}) ;
    background-repeat: no-repeat,  no-repeat;
    background-size: contain, 140%;
    background-position-x:center,50%;
    background-position-y: center, -60px ;
    height: 600px;
  }
  ${ResponsiveTo('xl')}{
    background-size: contain, 120%;
    background-position-x:center,10%;
  }
  
`
export const Container = styled.div`
  display: grid;
  place-content: center;
  .submenu-container{
    display: none;
  }

  ${ResponsiveTo('md')}{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: 112px;
    
    .submenu-container{
      display: block;
      }
  }
  ${ResponsiveTo('')}{
    flex-direction: row;
    max-width: 868px;
    gap: 64px;
    margin: 0 auto;
  }
`

export const TextBoxImg = styled.div`
    display: grid;
    place-content: center;
    place-items: center;
    gap: 8px;
    img{
      width: 58px;
      height: 58px;
    }
    ${ResponsiveTo('md')}{
      img{
        width: 83px;
        height: 83px;
      }
    }
`
