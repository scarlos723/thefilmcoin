import styled from 'styled-components'
import { ResponsiveTo } from '@/hooks/useResponsive'
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 257px;
  margin: 0 auto;
  
  background: transparent;
  ${ResponsiveTo('md')}{
    margin-top: 86px;
    max-width: 604px;
  }
  ${ResponsiveTo('lg')}{
    max-width: 711px;
    gap: 4rem;
  }
  ${ResponsiveTo('xl')}{
    max-width: 872px;
  }
  
`
export const Grid = styled.div`
  display: grid;
  max-width: 257px;
  grid-template-rows: 1fr auto;
  
  ${ResponsiveTo('lg')}{
    display: flex;
    flex-direction: column;
    justify-items: center; 
    max-width: 1088px;
  }
`
export const Title = styled.div`
  display: grid;
  gap: 16px;
  p{
    text-align: center;
  }
  ${ResponsiveTo('md')} {
  
  }
  ${ResponsiveTo('lg')} {
  
  }
`

export const AnimationContainer = styled.div`
  display: grid;
  place-content: center;
  img{
    width: 100%;
  }
`
