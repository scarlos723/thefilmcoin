import styled from 'styled-components'
import { ResponsiveTo } from '@/hooks/useResponsive'

export const Section = styled.section`
  background-color: black;
  width: 100%;
  padding:0;
`
export const Title = styled.p`
  font-size: 10px;
  line-height: 110%;
  text-transform: uppercase;
  text-align: center;
  color: #12D466;

  ${ResponsiveTo('md')} {
    font-size: 13px;
    letter-spacing: 0.15em;
  }
  ${ResponsiveTo('lg')}{
    font-size: 15px;
  }
`
export const Container = styled.div`
  width: 238px;
  margin: 0 auto;
  border: 1px solid #12D466;
  border-radius: 11px;
  padding: 8px;
  ${ResponsiveTo('md')} {
    width: 382px;
  }
  ${ResponsiveTo('lg')}{
    width: 549px;
  }
`
export const CountContainer = styled.div`
  display: flex;
  gap:8px;
  margin: 0 auto;
  place-content: center;
  place-items: center;
  .puntos{
    display: flex;
    height: 100%;
    margin-bottom: auto;
  } 
  section:last-child{
      .puntos{
        display: none;
      } 
  }
  ${ResponsiveTo('md')} {
    margin: 0 auto;
    max-width: 500px;
  }
  ${ResponsiveTo('lg')}{
    max-width: 768px;
  
  }
  
`
export const Element = styled.section`
  display: flex;
  //flex-flow:column nowrap;
  color: white;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  gap:8px;
  p{
    font-size: 8px;
    line-height: 110%;
    /* identical to box height, or 9px */

    text-align: center;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #12D466;
  }
  h1{
    font-family: 'Monument Extended';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 110%;
    /* or 20px */

    text-align: center;
    letter-spacing: 0.17em;
    text-transform: uppercase;
    color: #12D466;
  }
  ${ResponsiveTo('md')}{
    p{
      font-size: 10px;
    }
    h1{
      font-size: 35px;
      letter-spacing: 0.1em;
    }
  }
  ${ResponsiveTo('lg')}{
   
    h1{
      font-size: 35px;
      
    }
  }
  
`
export const Circle = styled.div`
  display: flex;
  flex-direction: column;
  
`
