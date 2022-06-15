import styled from 'styled-components'
import { ResponsiveTo } from '@/hooks/useResponsive'

export const Container = styled.div`
  width: 100%;
  display: grid;
  place-content: center;
  padding-top: 55px;
`
export const Contain = styled.div`
  width: 253px;
  ${ResponsiveTo('md')}{
    width: 650px;
    margin-bottom: 40px;
  }
  ${ResponsiveTo('lg')}{
    width: 100%;
    place-self: center;
    max-width:1098px;
    
  }
`
export const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  margin-top: 28px;
  column-gap: 20px;
  height: 312px;
  margin: 50px 0;
  .video-container{
      display: grid;
      place-content: center;
      position: relative;
      background-color: #171616;
      iframe{
        position: absolute;
        width: 100%;
        height: 100%;
      }
    }
    div:nth-child(2){
      width: 100%;
      height: 100%;
    }
    div:nth-child(3){
      width: 100%;
      height: 100%;
      margin-top: 16px;
    }


  ${ResponsiveTo('md')}{
    margin: 0;
    height: auto;
    column-gap: 0px;
    grid-template-columns:  1fr 2fr;
    grid-template-rows: 1fr 1.5fr;
    margin-top: 68px;

    div:nth-child(2){
      grid-column: 2 ;
    }
    div:nth-child(3){
      grid-row: 2 ;
      grid-column: 1/ span 2;
      margin-top: 36px;
      height: 100%;
    }
    
  }
  ${ResponsiveTo('lg')}{
    width: 100%;
    max-width: 568px;
    height: 443px;
    margin-bottom: 200px;
  }
  ${ResponsiveTo('xl')}{
    width: 100%;
    max-width: 712px;
    height: 603px;
  }
`
export const TextBox = styled.div`
  display: none;
  grid-column: 1 ;
  ${ResponsiveTo('md')}{
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #000000;
    border: 1px solid #12D466;
    box-sizing: border-box;
    padding: 30px 20px;
    
    h5{
      font-family: 'Monument Extended';
      font-style: normal;
      font-weight: 800;
      font-size: 1.875rem;
      line-height: 36px;
      color: #FFFFFF;
      margin: 4px 0;
      text-align: center;
      span{
        color: #12D466;
      }
    }
    p{
      text-align: center;
      padding: 0 20px;
    }
    
  }
  ${ResponsiveTo('lg')}{
    h5{
      font-size: 1.563rem,;
      line-height: 30px;
    }
    p{
      padding: 0;
    }
  }
  
`
