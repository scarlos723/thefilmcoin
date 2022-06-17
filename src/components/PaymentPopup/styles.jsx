import styled from 'styled-components'
import { ResponsiveTo } from '@/hooks/useResponsive'

export const Section = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  place-content: center;
  background-color: #0000006b;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  gap: 56px;
  background-color: black;
  color: white;
  border-radius: 28px;
  padding: 56px 32px;
  max-width: 368px;
  img{
    width: 127px;
    height: 75px;
  }
  a{
    text-decoration: none;
    color: white;
    font-family: 'Monument Extended';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 144.7%;
    /* or 20px */
    text-align: center;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 316px;
    height: 35px;
    background: rgba(0, 146, 66, 0.3);
    border: 1px solid #009242;
    box-sizing: border-box;
    border-radius: 13px;
  }
  ${ResponsiveTo('md')}{
    max-width: 588px;
  }
`
export const Text = styled.div`
  display: grid;
  place-items: center;
  h1 {
    font-family: 'Monument Extended';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 116.5%;
    letter-spacing: -0.05em;
    text-transform: uppercase;
    text-align: center;
    span {
      color: #12D466;
    }
    margin-bottom: 8px;
  }
  p {
    width: 389px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 116.5%;
    /* or 23px */
    text-align: center;
    letter-spacing: -0.05em;
  }
  ${ResponsiveTo('md')}{
    h1 {
      font-size: 20px;
    }
    p {
      font-size: 20px;
    }
  }
`
