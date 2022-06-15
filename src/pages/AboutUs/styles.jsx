
import styled from 'styled-components'
import { BgGradient } from '../Home/styles'
import { ResponsiveTo } from '@/hooks/useResponsive'
import worldGif from '@/images/aboutUs/world_digital.gif'
export const Container = styled.div`
  display: block;
`

export const BgGradientFirst = styled(BgGradient)`
    background: radial-gradient(84.23% 24.87% at 98.53% 51.21%,
      rgba(10, 128, 61, 0.6) 0%, 
      rgba(0, 0, 0, 0.6) 100%), black ;
    background-size: 886px 2148px ;
    background-repeat:no-repeat, no-repeat;
    background-position: 8px center;

  ${ResponsiveTo('md')}{
    background-position: center right;
  }

  ${ResponsiveTo('lg')}{
    
    background: radial-gradient(84.23% 24.87% at 98.53% 51.21%,
      rgba(10, 128, 61, 0.6) 0%, 
      rgba(0, 0, 0, 0.6) 100%), url(${worldGif}), black ; //aqui va el gif
    background-size: 886px 2148px, 80% ;
    background-repeat:no-repeat;
    background-position: right center, -260% 70%;
  }
  ${ResponsiveTo('xl')}{
    background: radial-gradient(84.23% 24.87% at 98.53% 51.21%,
      rgba(10, 128, 61, 0.6) 0%, 
      rgba(0, 0, 0, 0.6) 100%), url(${worldGif}), black ; //aqui va el gif
    background-size: 886px 2148px, 70% ;
    background-repeat:no-repeat;
    background-position: right center, -700px 70%;
  }
`

export const BgGradientSecond = styled.div`
  background:  
      radial-gradient(84.23% 24.87% at 80% 51.21%, 
      rgba(10, 128, 61, 0.6) 0%,
      rgba(0, 0, 0, 0.6) 100%) , black; 
  background-repeat: no-repeat, no-repeat;
  background-size: 100% 100%, 50% 50%;
  background-position: 100px -300px, left -600px;

  ${ResponsiveTo('md')}{
    background-size: 100% 100%, 50% 50%;
    background-position: right -300px, left -600px;

  }
  ${ResponsiveTo('lg')}{
    background: radial-gradient(84.23% 24.87% at 0% 51.21%, 
      rgba(10, 128, 61, 0.6) 0%,
      rgba(0, 0, 0, 0.6) 100%) , black;
    background-size: 1040px 2148px ;
    background-position: left center;
    background-repeat: no-repeat;
  }
`

export const BgGradientLast = styled.div`
  background:  radial-gradient(77.79% 50.44% at 0% 55.07%, 
        rgba(10, 128, 61, 0.6) 0%, 
        rgba(0, 0, 0, 0.6) 100%), black;
  background-position: -100px center;
  background-repeat: no-repeat;
  ${ResponsiveTo('md')}{
    background:  radial-gradient(77.79% 50.44% at 0% 55.07%, 
        rgba(10, 128, 61, 0.6) 0%, 
        rgba(0, 0, 0, 0.6) 100%), black;
    background-position: left center;
  }
  ${ResponsiveTo('lg')}{
  background:  radial-gradient(77.79% 50.44% at 92.1% 55.07%, 
    rgba(10, 128, 61, 0.6) 0%, 
    rgba(0, 0, 0, 0.6) 100%), black;
    
  }

`
