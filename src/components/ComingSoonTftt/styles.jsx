import styled from 'styled-components'
import bgImg from '@/images/productions/bgGraffiti.png'
import { ResponsiveTo } from '@/hooks/useResponsive'
export const Container = styled.div`
  display: grid;
  background: url(${bgImg}), black;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  padding: 90px 38px;
  ${ResponsiveTo('md')}{
    padding: 180px 44px;
  }
  ${ResponsiveTo('lg')}{
    padding: 212px 160px;
  }
`
export const TextBox = styled.section`

  text-transform: uppercase;
  text-align: center;
  h1,h4,p{
    text-shadow: 0px 10px 5px #00000061;
  }
  h4{
    font-family: 'Monument Extended';
    font-style: normal;
    font-weight: 400;
    font-size: 0.938rem;
    line-height: 150%;
    /* or 22px */

    text-align: center;
    text-transform: uppercase;
    color: #12D466;
  }
  p{
    font-family: 'Monument Extended';
    font-style: normal;
    font-weight: 400;
    font-size: 0.625rem;
    line-height: 150%;
    /* identical to box height, or 30px */

    text-align: center;
    text-transform: uppercase;
  }
  ${ResponsiveTo('md')}{
    max-width: 1098px;
    margin: 0 auto;
    br{
      display: none;
    }
    h1{
      letter-spacing: 0.3em;
    }
    h4{
    font-size: 1.25rem;
    letter-spacing: 0.3em;
    }
    p{
      font-size: 1.25rem;
    }
  }
  ${ResponsiveTo('xl')}{
    br{
      display: block;
    }
  }
`
