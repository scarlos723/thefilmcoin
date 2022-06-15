import styled from 'styled-components'
import { ResponsiveTo } from '@/hooks/useResponsive'

export const Section = styled.section`
  padding: 2rem 0 2rem 0;
  background-color: transparent;
  width: 90%;
  max-width:257px;
  margin: 0 auto;
  ${ResponsiveTo('md')} {
    padding-bottom: 2rem;
    background-image: unset;
    max-width: 595px;
  }
  ${ResponsiveTo('lg')} {
    padding-bottom: 6rem;
    max-width: 711px;
  }
  ${ResponsiveTo('xl')} {
    max-width: 865px;
  }
`

export const Title = styled.h2`

  
  text-align: center;
  color: white;
  padding: 2rem 1rem 1.25rem 1rem;
  span{
    color: #12D466; 
  }
  ${ResponsiveTo('md')} {
    padding: 3rem 2rem 1rem;
  }
  ${ResponsiveTo('lg')} {
    padding: 4rem 10% 2rem;
    margin-right: -3%;
    width: 100%;
    br{
      display: none;
    }
  }
  ${ResponsiveTo('xxl')} {
    margin-right: 0;
  }
`

export const Paragraph = styled.p`
  color: white;
  
  text-align: left;


  strong {
    display: block;
    font-weight: 700;
    margin-top: 1.5rem;
    color: #12D466;
  }
  span{
    color: #12D466;
  }
  ${ResponsiveTo('md')} {
    text-align: center;
  }
  ${ResponsiveTo('lg')} {
  }
  ${ResponsiveTo('xl')} {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0;
  }
`

export const Table = styled.table`
  color: white;
  text-transform: capitalize;
  letter-spacing: -0.05em;
  border-radius: 12px;
  border-spacing: 0;
  max-width: 100%;
  margin-top: 37px;
  td {
    border-bottom: 1px solid #12D466;
    a{
      text-decoration: none;
      color:white;
    }
  }
  td:nth-child(2){
    padding: 0.5rem 1rem;
  }
  td:first-child {
  
    p{
      text-align: right;
    }
  }
  tr td:last-child {
    border-right: none;
    word-break: break-word;
  }
  tr:last-child td {
    border-bottom: none;
  }
  ${ResponsiveTo('md')} {
    margin-top: 52px;
    td:first-child {
    text-align: right;
    }
  }
  ${ResponsiveTo('lg')} {
    margin-top: 59px;
    td:first-child {
      width: 150px;
    }
    td:nth-child(2) {
      padding: 0.75rem 1.5rem;
      p{
        font-size: 15px;
        letter-spacing: -0.05em;
      }
    }
  }
  ${ResponsiveTo('xl')} {
    margin-top: 70px;
    td:first-child {
      width: 187px;
    }
  }
`
