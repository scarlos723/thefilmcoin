import styled from 'styled-components'
import bgImg from '@/images/benefits/bgBenefits.png'
import { ResponsiveTo } from '@/hooks/useResponsive'

export const Section = styled.section`
  display: grid;
  place-content: center;
  align-content: flex-end;
  width: 100%;
  height: 280px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(${bgImg}), black;
  background-repeat: no-repeat;
  background-size: 210% 150%;
  background-position: 55% top;
  ${ResponsiveTo('md')}{
    align-content: center;
    background-size: cover;
    height: 30rem;
    margin: 0;
  }
  ${ResponsiveTo('lg')} {
    height: 40rem;
  }
`

export const Grid = styled.section`
  display: flex;
  width: 100%;
  height: 340px;
  flex-direction: column;
  justify-content: end;
  ${ResponsiveTo('md')}{
    height: auto;
    padding: 120px 108px;
    margin-top: 9rem;
    gap: 9rem;
  }
  ${ResponsiveTo()}{
    max-width: 1180px;
    padding: 200px 0 ;
    /* margin: 0 auto; */
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap:0;
  }
  ${ResponsiveTo('1280px')} {
    gap: 9rem;
  }
`

export const Col1 = styled.div`
  display: grid;
  place-items: center;
  margin-bottom: -1.25rem;
  img {
    width: 4rem;
  }
  ${ResponsiveTo('lg')} {
    img {
      width: 5rem;
    }
  }
`

export const Col2 = styled.div`
  display: flex;
  justify-content: center;
  ${ResponsiveTo('lg')} {
    justify-content: flex-end;
  }
`

export const Submenu = styled.ul`
  display: none;
  ${ResponsiveTo('md')}{
    display: grid;
    color: white;
    /* gap: 72px; */
    grid-template-columns: 220px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 1.1rem;
    line-height: 105%;
    text-transform: uppercase;
    div{
      display: flex;
      flex-direction: column;
      gap: 0;
    }
  }
`
