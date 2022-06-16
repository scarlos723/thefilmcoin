import styled from 'styled-components'
import { ResponsiveTo } from '@/hooks/useResponsive'
import { TransparentButton } from '@/styles/buttonsStyles'

export const Section = styled.section`
  height: auto;
  padding: 4rem 2rem;
  ${ResponsiveTo('md')} {
    padding: 14rem 5rem 6rem;
    background: radial-gradient(39.64% 47.25% at 98.39% 47.25%, rgba(10, 128, 61, 0.6) 0%, rgba(0, 0, 0, 0) 100%);
    background-repeat: no-repeat;
    background-position: 10% -50px;
  }
  ${ResponsiveTo('lg')}{
    padding: 6rem 10%;
    background-position-y: 50px;
  }
`

export const Grid = styled.div`
  color: white;
  margin: 0 auto;
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  line-height: 150%;
  ul {
    max-width: 265px;
    margin: 0 auto;
  }
  li {
    list-style-type: disc;
    margin-left: 1.25rem;
    text-align: left;
    font-weight: 300;
  }
  li::marker {
    color: #12D466;
  }
  ${ResponsiveTo('md')}{
    display: grid;
    font-size: 13px;
    line-height: 150%;
    grid-template-columns: 280px 3fr;
    justify-items: center;
    align-items: center;
    ul {
      max-width: 335px;
      margin: 0;
    }
  }
  ${ResponsiveTo('lg')}{
    grid-template-columns: 276px 1fr;
    grid-template-rows: 33px 300px 1fr;
    column-gap: 2.25rem;
  }
  ${ResponsiveTo('xl')}{
    grid-template-columns: minmax(450px, 697px) 650px;
    grid-template-rows: 39px 420px 1fr;
    justify-content: center;
    font-size: 15px;
    line-height: 150%;
    column-gap: 4rem;
    ul {
      max-width: 383px;
    }
  }
`

export const Title = styled.h2`
  font-family: 'Monument Extended', sans-serif;
  font-style: normal;
  font-size: 18px;
  line-height: 110%;
  font-weight: 400;
  text-align:center;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  ${ResponsiveTo('md')}{
    font-size: 30px;
    line-height: 110%;
    grid-column: 1 / -1;
    margin-bottom: 0;
  }
  ${ResponsiveTo('xl')} {
    font-size: 35px;
    line-height: 110%;
  }
`

export const Image = styled.img`
  width: 100%;
  ${ResponsiveTo('md')} {
    width: 440px;
    transform: translateX(-40%);
  }
  ${ResponsiveTo('lg')} {
    width: 496px;
    transform: none;
    grid-row: 2 / -1;
  }
  ${ResponsiveTo('xl')}{
    width: 697px;
  }
`

export const GreenButton = styled(TransparentButton)`
  font-family: 'Monument Extended', sans-serif;
  padding: 0.5rem 0 0.25rem;
  margin: 2.5rem auto 0;
  width: 100%;
  display: block;
  max-width: 230px;
  background: rgba(0, 146, 66, 0.3);
  border: 1.5px solid #12D466;
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 15px;
  line-height: 144.7%;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  ${ResponsiveTo('md')} {
    font-size: 20px;
    line-height: 144.7%;
    max-width: 335px;
    grid-column: 1 / -1;
    margin: 0;
  }
  ${ResponsiveTo('lg')} {
    align-self: flex-start;
    grid-column-start: 2;
  }
  ${ResponsiveTo('xl')} {
    max-width: 384px;
  }
`
