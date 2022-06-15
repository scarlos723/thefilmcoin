import styled from 'styled-components'
import { ResponsiveTo } from '@/hooks/useResponsive'

export const Title = styled.h2`
  color: white;
  text-align: center;
  margin: 4rem 0 2.25rem;
  ${ResponsiveTo('md')} {
    margin: 5.5rem 0 3.25rem;
  }
  ${ResponsiveTo('lg')} {
    margin: 7.75rem 0 5.25rem;
  }
`
export const Container = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  place-content: center;
  img{
    width: 100%;
  }
  .roadmap-L{
    display: none;
  }
  .roadmap-M{
    display: none;
  }
  ${ResponsiveTo('md')}{
    .roadmap-M{
      display: block;
    }
    .roadmap-S{
      display: none;
    }
  }
  ${ResponsiveTo('lg')}{
    padding-bottom: 100px;
    .roadmap-M{
      display: none;
    }
    .roadmap-L{
      display: block;
    }
  }
`
