import styled from 'styled-components'
import { ResponsiveTo } from '@/hooks/useResponsive'

export const GoalsSection = styled.div`

  .bottom-line-container{
    width: 100%;
    position: relative;
    bottom: -20px;
    left: 0;
    img{
      width: 100%;
    }
  }

  ${ResponsiveTo('md')} {
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
    .bottom-line-container{
      img{
        width: 76%;
      }
    }
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 4rem 1rem;
  color: #fff;
  ${ResponsiveTo('420px')} {
    padding: 4rem 2.5rem;
  }
  ${ResponsiveTo('md')} {
    gap: 1rem;
    padding: 8rem 5rem 6rem;
  }
  ${ResponsiveTo('lg')} {
    gap: 1.5rem;
    padding: 6.5rem 10%;
    padding-top: 3rem;
  }
`

export const LogoImage = styled.img`
  ${ResponsiveTo('md')} {
    display: none;
  }
  ${ResponsiveTo('lg')} {
    display: inline;
  }
`

export const Title = styled.h2`
  ${ResponsiveTo('lg')} {
    max-width: 1020px;
  }
`

export const Content = styled.p`
  text-align: left;
  max-width: 650px;
  ${ResponsiveTo('lg')} {
    max-width: 920px;
  }
`
