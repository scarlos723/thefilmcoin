import styled, { css } from 'styled-components'
import { ResponsiveTo } from '@/hooks/useResponsive'
import arrowDown from '@/images/aboutUs/arrowDown.png'
import coins from '@/images/aboutUs/coinsGlobalSolution.svg'

export const Container = styled.section`
  margin-top: -2.25rem;
  padding: 0 30px;
  position: relative;
  padding-bottom: 68px;
  .bottom-line-container{
    width: 100%;
    position: absolute;
    bottom: -20px;
    left: 0;
    img{
      width: 100%;
    }
  }
  ${ResponsiveTo('420px')} {
    padding: 0rem 2.5rem;
    padding-bottom: 80px;
  }
  ${ResponsiveTo('md')} {
    display: flex;
    flex-direction: column;
    margin-top: 0;
    padding: 4rem 2.5rem;
    .bottom-line-container{
      width: 100%;
      display: grid;
      place-items: center;
      img{
        width: 88%;
      }
    }
  }
  ${ResponsiveTo('lg')}{
    padding: 6rem 10%;
    display: grid;
    grid-template-columns: minmax(2fr, 725px) minmax(1fr, 325px);
    grid-gap: 5rem 4rem;
    justify-content: center;
    justify-items: center;
    align-items: center;

    background-image: url(${coins});
    background-repeat: no-repeat;
    background-size: auto;
    background-position: right top;
    .bottom-line-container{
      img{
        width: 76%;
      }
    }
  }
`

export const LogoImage = styled.img`
  display: block;
  margin: 0 auto;
  margin-bottom: 24px;
  ${ResponsiveTo('md')} {
    display: block;
    margin: 0 auto 4rem;
    width: 160px;
    order: 2;
  }
  ${ResponsiveTo('lg')}{
    width: 250px;
    margin: 0;
  }
`

export const Title = styled.h2`
  
  margin-bottom: 2.25rem;

  ${ResponsiveTo('md')}{ 
    text-align: center;
    max-width: 650px;
    margin: 0 auto 4rem;
    order: 1;
  }
  ${ResponsiveTo('lg')}{
    margin: 0;
    text-align: left;
    grid-column-start: 1;
    grid-row-start: 1;
    justify-self: flex-start;
    align-self: flex-end;
  }
`
export const Text = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 300;
  color: white;
  white-space: pre-line;
  em {
    color: #12D466;
    font-style: normal;
  }
  p {
    margin-bottom: 1rem;
  }
  ${ResponsiveTo('md')} {
    column-count: 2;
    column-gap: 2rem;
    max-width: 720px;
    margin: 0 auto;
    order: 3;
  }

  ${ResponsiveTo('lg')} {
    column-count: 3;
    max-width: 1094px;
    column-gap: 4rem;
    column-fill: balance;
    grid-column: 1 / span 2;
    grid-row-start: 2;
    
    text-align: left;
    word-spacing: 5px
  }
`

export const HiddenBlock = styled.span`
  transition: all 0.4s;
  display: block;
  ${props => props.isVisible
    ? css`
      height: 1px;
      opacity: 0;
    `
    : css`
      height: auto;
      opacity: 1;
    `
}
  ${ResponsiveTo('md')}{
    display: none;
  }
  
`

export const LearnMore = styled.button`
  font-size: 1rem;
  color: #12D466;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  line-height: 19.5px;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  &::after {
    content: url(${arrowDown});
    margin-left: 0.25rem;
    display: inline-block;
  }
  ${ResponsiveTo('md')} {
    display: none;
  }
`
