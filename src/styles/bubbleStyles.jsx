import styled from 'styled-components'
import { ResponsiveTo } from '@/hooks/useResponsive'

export const Bubble = styled.article`
  width: 164.11px;
  height: 163.43px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 50%;
  border: 1px solid white;
  padding: 1rem;
  h3,p{
    font-style: normal;
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 14px;
    text-align: center;
  }
  h3{
    font-family: 'Monument Extended';
    text-align: center;
    text-transform: uppercase;

    color: #12D466;
  }
  p{
    font-family: 'Montserrat';
  
  letter-spacing: -0.05em;
  text-transform: capitalize;
  color: #FFFFFF;
  }
  ${ResponsiveTo('md')} {
    width: 224.04px;
    height: 223.1px;
    gap: 16px;
    h3,p{
      font-size: 1rem;
    }
    h3{
      line-height: 20px;
    }
  }
  
  
`
