
import styled from 'styled-components'
import { ResponsiveTo } from '@/hooks/useResponsive'

export const BlackFooter = styled.footer`
  background: #171616;
  padding: 20px 20px 60px 20px;

  ${ResponsiveTo('md')}{
    padding: 40px 20px;

  }
`

export const Grid = styled.section`
  display: grid;
  grid-template-rows: repeat(3,1fr);
  margin: 0 auto;
  margin-top: 32px;
  gap: 16px;
  
  div:nth-child(1){
    grid-row: 2;
  }
  div:nth-child(2){
    grid-row: 1;
  }
  div:nth-child(3){
    grid-row: 3;
  }
  ${ResponsiveTo('md')}{
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(3,1fr);
    gap: 0;
    div:nth-child(1){
      grid-row: 1;
      grid-column: 1;
    }
    div:nth-child(2){
      grid-row: 1;
      grid-column: 2;
    }
    div:nth-child(3){
      grid-row: 1;
      grid-column: 3;
    }
  }
  ${ResponsiveTo('lg')}{
    max-width: 1344px;
  }
`

export const SocialBar = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  max-width: 236px;
  margin: 0 auto;
  gap: 16px;
  margin-top: 40px;
  ${ResponsiveTo('md')}{
    margin-top: 0px;
  }
`
export const SocialItem = styled.a`
  cursor:pointer;
  width:30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BlackCol = styled.div`
  color:white;
  width:100%;
  display: grid;
  text-align: center;
  place-content: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  
  line-height: 12px;
  small{
    font-size:0.625rem;
  }
  .policies{
    display: grid;
    width: 100px;
    gap: 4px;
    a{
      text-decoration: none;
      color: #12D466;
      font-weight: 400;
      transition: all 0.5s;
      &:hover{
        transform: scale(1.3);
      }
    }
  }
  .copyright{
    display: grid;
    gap: 4px;
    font-weight: 400;
    width: 100px;
    text-align: center;
    small:nth-child(1){
      color: #12D466;;
    }
  }
  ${ResponsiveTo('md')}{
    .copyright{
      text-align: left;
    }
  }
  ${ResponsiveTo('lg')}{

    .policies{
      width: 100%;
      gap: 4px;
      place-self: end;
      text-align:right;
    }
    .copyright{
      width: 100%;
      text-align: left;
    }
  }

`
