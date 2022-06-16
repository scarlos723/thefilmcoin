import styled, { css } from 'styled-components'
import { ResponsiveTo } from '@/hooks/useResponsive'
import bgImg from '@/images/contact/productionTeamFilming.png'

export const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9rem 0 7rem;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
                    url(${bgImg});
  background-size: cover;
  background-position: 30% center;
  background-repeat: no-repeat;
  ${ResponsiveTo('md')} {
    width: 100%;
    padding: 14rem 0 4rem;
  }
`

export const Container = styled.div`
  width: 100%;
  padding: 0 1rem;
  color: white;
  ${ResponsiveTo('420px')} {
    padding: 0 3.25rem;
  }
  ${ResponsiveTo('md')} {
    padding: 0 3rem;
    border-radius: 6px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  & > div:not(div:nth-child(5)) {
    display: flex;
    flex-direction: column;
  }
  ${ResponsiveTo('md')} {
    width: 80%;
    margin: 0 auto;
  }
  ${ResponsiveTo('xl')} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 123px 123px 60px 1rem 90px;
    grid-gap: 0 3.75rem;
    max-width: xl;
    & > div:nth-child(3) {
      grid-column-start: 2;
      grid-row-start: 1;
    }
    & > div:nth-child(4) {
      grid-row-end: span 3;
    }
    & > button {
      grid-column-start: 2;
      justify-self: flex-start;
    }
  }
`

export const Title = styled.h1`
  font-family: 'Monument Extended', sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.25;
  margin-bottom: 1.5rem;
  em {
    font-style: normal;
    color: #12D466;
  }
  ${props => props.sent && css`letter-spacing: 1rem;`}
  ${ResponsiveTo('420px')} {
    font-size: 1.875rem;
    line-height: 36px;
    margin-bottom: 1.25rem;
  }
  ${ResponsiveTo('md')} {
    text-align: center;
  }
  ${ResponsiveTo('lg')} {
    font-size: 2.5rem;
    line-height: 3rem;
  }
`

export const Description = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: white;
  margin-bottom: 3.25rem;
  ${ResponsiveTo('md')} {
    text-align: center;
    margin-bottom: 5.5rem;
  }
  ${ResponsiveTo('lg')} {
    margin-bottom: 3.75rem;
  }
`

export const Label = styled.label`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  ${props => props.required && css`
    &::after {
      content: '*';
      color: #12D466;
    }
  `}
`

const textBox = css`
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

export const Input = styled.input`
  ${textBox}
`

export const TextArea = styled.textarea`
  height: 10rem;
  resize: none;
  ${textBox}
  margin-bottom: 0;
  ::-webkit-scrollbar {
    width: 0.5rem;
    background-color: transparent;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: #c4c4c4;
  }
`

export const TermsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 3rem;
  & > label {
    color: #A9A9A9;
  }
  ${ResponsiveTo('xl')} {
    margin-top: 1.25rem;
  }
`

export const Checkbox = styled.div`
  cursor: pointer;
  margin-right: 0.75rem;
  width: 0.75rem;
  height: 0.75rem;
  border: 0.5px solid #12D466;
  border-radius: 50%;
  ${props => props.checked && css`
    display: flex;
    align-items: center;
    justify-content: center;
    &:after {
      content: '';
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: #009242;
    }
  `}
`

export const Button = styled.button`
  color: white;
  align-self: flex-end;
  margin-top: 2rem;
  margin-right: 1.5rem;
  font-family: 'Monument Extended';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 144.7%;
  text-align: center;
  letter-spacing: 0.025em;
  text-transform: uppercase;
  padding: 0.75rem 1.5rem;
  background: rgba(0, 146, 66, 0.2);
  border: 0.5px solid #12D466;
  box-sizing: border-box;
  border-radius: 10px;
  ${ResponsiveTo('md')} {
    align-self: center;
    margin-right: 0;
  }
  ${ResponsiveTo('xl')} {
    margin-top: 2.5rem;
  }
`
