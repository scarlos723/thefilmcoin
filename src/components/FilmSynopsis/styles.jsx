import styled from 'styled-components'
import { ResponsiveTo } from '@/hooks/useResponsive'
import filmSynopsisGif from '@/images/productions/filmSynopsis.gif'
import AfterImage from '@/images/productions/after.png'

export const Section = styled.section`
  width: 100%;
  height: 700px;
  background-color: black;
  background-image: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 20%), url(${filmSynopsisGif});
  background-position: center bottom;
  background-repeat: no-repeat;
  padding: 4rem 1rem 2.5rem;
  margin-top: -5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  ${ResponsiveTo('420px')} {
    padding: 4rem 2.5rem;
  }
  ${ResponsiveTo('md')} {
    padding: 5.5rem 3rem;
  }
  ${ResponsiveTo('lg')} {
    background-image: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 30%), url(${filmSynopsisGif});
    height: 800px;
    background-size: cover;
    padding: 7rem 10% 10rem;
  }
`

export const Paragraph = styled.p`
  
  text-align: left;
  em {
    font-style: normal;
    font-weight: 700;
  }
  a{
    text-decoration: none;
    color: #BE0D0D;
  }
  ${ResponsiveTo('lg')} {
    max-width: 465px;
  }
  ${ResponsiveTo('xl')}{
    max-width: 566px;
  }
`

export const ExternalLink = styled.a`

  text-decoration: none;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  p{
    color: #12D466;
  }
  &::after {
    content: url(${AfterImage});
    margin-left: 0.25rem;
  }
  &:hover,
  &:focus,
  &:active,
  &:visited,
  &:link {
    text-decoration: none;
    color: #12D466;
  }
`
