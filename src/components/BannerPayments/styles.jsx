import styled from 'styled-components'
import bgImg from '@/images/payments/banner.png'
import { ResponsiveTo } from '@/hooks/useResponsive'

export const Container = styled.div`
  width: 100%;
  background-image: linear-gradient(0deg, #000000 10%, rgba(27, 24, 24, 0) 100%),
                    /* linear-gradient(180deg, #000000 -10%, rgba(0, 0, 0, 0) 100%), */
                    url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: 80%;
  min-height: 400px;
  margin-top: -120px;
  ${ResponsiveTo('md')}{
    margin-top: -290px;
    min-height: 590px;
    background: linear-gradient(0deg, #000000 1%, rgba(27, 24, 24, 0) 70%), url(${bgImg}) ;
    background-size: 100%, 200%;
    background-position:center center, -600px -100px;
  }
  ${ResponsiveTo('xl')}{
    margin-top: -290px;
    min-height: 620px;
    background-size: 100%, cover;
    background-position: center center,center center;
  }
`
export const Grid = styled.div`
  display: grid;
  color: white;
  margin-top: 100px;
  place-content: center;
  place-items: center;
  padding: 180px 2rem 0.25rem;
  h1{
    font-size: 20px;
    line-height: 24px;
    max-width: 540px;
  }
  ${ResponsiveTo('md')}{
    margin-top: 260px;
    h1{
      font-size: 30px;
      line-height: 36px;
    }
  }
  ${ResponsiveTo('lg')}{
    h1{
      max-width: 942px;
      font-size: 40px;
      line-height: 48px;
    }
  }
`
