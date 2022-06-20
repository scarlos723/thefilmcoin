import styled, { css } from 'styled-components'
import { ResponsiveTo } from '@/hooks/useResponsive'

export const Section = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 0 4rem;
  ${ResponsiveTo('768px')} {
    width: 100%;
    padding: 4rem 0 6rem;
    min-height: initial;
  }
  ${ResponsiveTo('1024px')} {
    margin-top: -5rem;
    padding: 4rem 0 8rem;
  }
`

export const Container = styled.div`
  width: 100%;
  padding: 0 1rem;
  color: white;
  max-width: 480px;
`

export const Form = styled.form`
  color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: white;
  margin-top: 1.5rem;
  text-transform: capitalize;
  text-align: left;
  em {
    font-style: normal;
    color: #12D466;
  }
  ${ResponsiveTo('420px')} {
    font-size: 20px;
    line-height: 24px;
    text-align: left;
  }
`

export const Input = styled.input`
  width: 100%;
  border: 0.5px solid #12D466;
  background-color: rgba(0, 0, 0, 0.35);
  border-radius: 6px;
  color: white;
  padding: 1.125rem 2.5rem;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  margin: 1.25rem 0 1.75rem;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: rgba(255, 255, 255, 0.8);
  }
`

export const Error = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #FF5C5C;
  margin-top: -1.25rem;
  margin-bottom: 1.25rem;
`

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0.75rem 0 4rem;
  flex-wrap: wrap;
  gap: 0.5rem;
  & > p {
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
  }
`

export const Button = styled.button`
  width: 100%;
  font-family: 'Monument Extended', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14.59px;
  line-height: 144.7%;
  text-align: center;
  letter-spacing: 0.025rem;
  text-transform: uppercase;
  color: #FFFFFF;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  ${props => props.variant === 'secondary'
    ? css`
      background: rgba(158, 168, 189, 0.31);
      border: 1.5px solid #9EA8BD;
    `
    : css`
      background: rgba(0, 146, 66, 0.3);
      border: 1.5px solid #12D466;
    `
  }
  ${ResponsiveTo('768px')} {
    font-size: 16px;
  }
`

export const ButtonsContainer = styled.div`
  width: 100%;
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  div{
    width:100%;
  }
  ${ResponsiveTo('400px')} {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    gap: 1rem;
  }
`
