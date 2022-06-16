import styled from 'styled-components'
import { ResponsiveTo } from '@/hooks/useResponsive'
import { Bubble } from '@/styles/bubbleStyles'

export const Section = styled.section`
  background-color: transparent;
  padding: 2rem 1rem;
  padding-top: 76px;
  ${ResponsiveTo('md')} {
    padding: 0 90px;
    padding-top: 84px;
  }
  ${ResponsiveTo('lg')} {
    padding: 6rem 10%;
    padding-top: 84px;
  }
`

export const Title = styled.h2`
  margin-bottom: 40px;
  ${ResponsiveTo('md')} {
    margin-bottom: 80px;
  }
  ${ResponsiveTo('lg')} {
    margin-bottom: 152px;
  }
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  gap: 28px;
  justify-content: center;
  ${ResponsiveTo('md')} {
    align-items: center;
    margin: 0 auto;
    border-bottom: 1px solid #12D466;
    padding-bottom: 80px;
    max-width: 559px;
  }
  ${ResponsiveTo('lg')} {
    max-width: 1102px;
    padding-bottom: 140px;
  }
`
export const BubbleKey = styled(Bubble)`
  
  ${ResponsiveTo('md')}{
    width: 177px;
    height: 177px;
  }
`
