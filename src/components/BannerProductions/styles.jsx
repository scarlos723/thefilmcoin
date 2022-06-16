import styled from 'styled-components'
import { ResponsiveTo } from '@/hooks/useResponsive'
import bgImg from '@/images/productions/bgComingSoon.png'

export const Section = styled.section`
  width:100%; 
  height:724px;
  background-color: black;
  background-image: url(${bgImg});
  background-size: 250%;
  background-repeat: no-repeat;
  background-position: center top;
  ${ResponsiveTo('md')} {
    height: auto;
    background-size: 140%;
    background-position: center 0;
  }
  ${ResponsiveTo('lg')}{
    background-size: cover;
  }

`

export const Container = styled.div`  
  width: 100%;
  height: 100%;
  display:flex;
  padding: 100px 20px;
  align-items: flex-end;
  background: linear-gradient(0deg, #000000 33.45%, rgba(196, 196, 196, 0) 100%);
  ${ResponsiveTo('md')} {
    background: linear-gradient(0deg, #000000 32.45%, rgba(196, 196, 196, 0) 100%);
  }
`
export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  
  ${ResponsiveTo('lg')}{
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`
export const SubmenuContainer = styled.div`
  display: none;
  ${ResponsiveTo('md')} {
    display:grid;
    place-content: end;
    padding: 120px 64px 100px 64px;
  }
  ${ResponsiveTo('lg')}{
    width: 100%;
    max-width: 1085px;
    padding: 120px 0 100px 0;
  }
  
`
export const Submenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
export const TexBox = styled.div`
  width:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  color: white;
  text-align: center;
  p{
    font-family: 'Monument Extended';
    font-style: normal;
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 150%;
    /* identical to box height, or 30px */

    text-align: center;
    letter-spacing: 0.3em;
    text-transform: uppercase;

    color: #12D466;
  }
  ${ResponsiveTo('lg')}{
    grid-column: 2;
    gap: 3.5rem;
    width: 530px;
    text-align: left;
  }
`
export const Title = styled.h1`
  font-family: 'Monument Extended';
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 116.5%;
  text-align: center;
  letter-spacing: 0.175em;
  text-transform: uppercase;
  span{
    color: #BE0D0D;
  }
  ${ResponsiveTo('md')} {
    font-size: 4rem;
    line-height: 116.5%;
    letter-spacing: 0.105em;
  }
  ${ResponsiveTo('lg')}{
    width: 1098px;
    font-size: 4rem;
  }
`
export const BoxButtons = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  gap: 20px;
  a{
    color: black;
    background-color: white;
    padding: 8px 16px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 20px;
    letter-spacing: -0.05em;
    text-decoration: none;
    border-radius: 20px;
    cursor: pointer;
    &:hover{
      color: white;
      background-color: black;
    }
  }
`
