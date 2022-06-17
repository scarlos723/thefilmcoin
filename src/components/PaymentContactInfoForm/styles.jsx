import styled, { css } from 'styled-components'
import { ResponsiveTo } from '@/hooks/useResponsive'

export const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0 4rem;
  background-color: rgba(0, 0, 0, 0.6);
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2) 10%),
                    radial-gradient(160.04% 99.81% at 174.35% 65.65%, rgba(10, 128, 61, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%);
  background-size: cover;
  background-position: 30% center;
  background-repeat: no-repeat;
  ${ResponsiveTo('md')} {
    width: 100%;
    padding: 4rem 0 6rem;
    min-height: initial;
  }
  ${ResponsiveTo('lg')} {
    margin-top: -5rem;
    padding: 4rem 0 8rem;
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2) 20%),
                      radial-gradient(160.04% 99.81% at 174.35% 65.65%, rgba(10, 128, 61, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%);
  }
`

export const Container = styled.div`
  width: 100%;
  padding: 0 1rem;
  color: white;
  ${ResponsiveTo('xs')} {
    padding: 0 3.25rem;
  }
  ${ResponsiveTo('md')} {
    padding: 0 3rem;
    border-radius: 6px;
  }
`

export const Title = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 18.2396px;
  line-height: 22px;
  color: white;
  margin-bottom: 3rem;
  text-transform: capitalize;
  ${ResponsiveTo('md')} {
    grid-column: 1 / -1;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 3.5rem;
    text-align: left;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  & > div {
    display: flex;
    flex-direction: column;
  }
  & > div:last-child {
    margin-top: 1.875rem;
  }
  & > div:last-child > button:first-child {
    margin-bottom: 0.75rem;
  }
  ${ResponsiveTo('md')} {
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-gap: 0 1.25rem;
    grid-template-columns: 1fr 1fr;
    & > div {
      grid-column-end: span 2;
    }
    & > div:nth-child(3),
    & > div:nth-child(4) {
      grid-row-start: 3;
      grid-column-end: span 1;
    }
    & > div:last-child {
      grid-column: 1 / -1;
      flex-direction: row-reverse;
      justify-content: space-between;
    }
    & > div:last-child > button:first-child {
      margin-bottom: 0;
    }
  }
  ${ResponsiveTo('xl')} {
    display: grid;
    grid-template-columns: 1fr 1fr 3rem 2fr;
    max-width: 1280px;
    & > div:nth-child(5),
    & > div:nth-child(6) {
      grid-column: 4 / span 1;
    }
    & > div:last-child {
      margin-top: 1.25rem;
    }
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
  ${ResponsiveTo('md')} {
    width: fit-content;
    font-size: 16px;
  }
`
