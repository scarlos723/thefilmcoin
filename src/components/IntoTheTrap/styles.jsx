
import styled from 'styled-components'
import coins from '@/images/tokenomics/coinSecondGraph1.svg'
import { ResponsiveTo } from '@/hooks/useResponsive'
import imgItem1 from '@/images/productions/stepImg1.png'
import imgItem2 from '@/images/productions/stepImg2.png'
import imgItem3 from '@/images/productions/stepImg3.png'
import imgHover1 from '@/images/productions/stepHover1.png'
import imgHover2 from '@/images/productions/stepHover2.png'
import imgHover3 from '@/images/productions/stepHover3.png'
import imgHover3Mb from '@/images/productions/stepHover3Mb.png'

export const Container = styled.div`
  display: flex;
  flex-direction: column  ;
  width: 100%;
  height: auto;
  background: radial-gradient(84.23% 24.87% at 98.53% 51.21%, rgba(10, 128, 61, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%), black;
  background-size: 1128px 2148px;
  background-position: -200px center;
  background-repeat: no-repeat;
  padding: 52px 0 92px 0;
  ${ResponsiveTo('md')}{
    background: url(${coins}), radial-gradient(39.64% 47.25% at 98.39% 47.25%, 
                  rgba(10, 128, 61, 0.6) 0%, 
                  rgba(0, 0, 0, 0) 100%), black;
    background-size: 66px 84.39px, 1024px 753px, auto;
    background-position-x: 120px, 0 , center;
    background-position-y: 50px, 0 , center;
    background-repeat: no-repeat;
  }
  ${ResponsiveTo('lg')}{
    background: url(${coins}),
                radial-gradient(39.64% 47.25% at 98.39% 47.25%, 
                  rgba(10, 128, 61, 0.6) 0%, 
                  rgba(0, 0, 0, 0) 100%)
                , black;
    background-size:92px 177.63px , 1280px 961px ;
    background-position-x: 220px, right , right;
    background-position-y: 0px, 20px , center;
    background-repeat: no-repeat;
  }
`
export const Title = styled.h2`
  margin-bottom: 84px;
`
export const Grid = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  max-width: 375px;
  margin: 0 auto;
  article{
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    transition: all 0.4s;
    &:hover{
      transform: scale(1.05);
    }
  }
  article:nth-child(1){
    background-image: url(${imgItem1});
    width: 178.24px;
    height: 222.22px;
    &:hover{
      background-image: url(${imgHover1});
    }
  }
  article:nth-child(2){
    background-image: url(${imgItem2});
    width: 178.24px;
    height: 222.22px;
    &:hover{
      background-image: url(${imgHover2});
    }
  }
  article:nth-child(3){
    background-image: url(${imgItem3});
    grid-row: 2;
    grid-column: span 2;
    width: 375px;
    height: 211.23px;
    margin-top: 44px;
    &:hover{
      background-image: url(${imgHover3Mb});
    }
  }
  ${ResponsiveTo('md')}{
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 40px;
    padding: 20px 0 80px 0px;
    width: 90%;
    max-width: 567px;
    
    article:nth-child(1), article:nth-child(2), article:nth-child(3){
      width: 168.83px;
      height: 260.41px;
      margin: 0;
    }
    article:nth-child(3){
        &:hover{
          background-image: url(${imgHover3});
        }
    }
  }
  ${ResponsiveTo('lg')}{
    max-width: 712px;
    article:nth-child(1), article:nth-child(2), article:nth-child(3){
      width: 212px;
      height: 327px;
    }
  }
  ${ResponsiveTo('xl')}{
    gap: 58px;
    width: 100%;
    max-width: 1094px;
    margin: 0 auto;
    article:nth-child(1), article:nth-child(2), article:nth-child(3){
      margin-top: 0;
      width: 326px;
      height: 384px;
      grid-row: unset;
      grid-column:unset;
      cursor: pointer;
    }
  
  }
`
