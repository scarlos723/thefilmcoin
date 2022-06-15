
import styled from 'styled-components'
import { ResponsiveTo } from '@/hooks/useResponsive'
import coins1 from '@/images/home/coinsUtility1.svg'
import coins2 from '@/images/home/coinsUtility2.svg'
import coins3 from '@/images/home/coinsUtility3.svg'
import imgUtil from '@/images/home/imgUtility.png'
import imgUtilMb from '@/images/home/imgUtilityMb.png'

export const Container = styled.div`
  width: 100%;
  display: grid;
  place-content: center;
  place-items: center;
  padding: 3rem 2rem;
  padding-bottom: 20px;

  ${ResponsiveTo('md')}{
    background: url(${coins3});
    background-size: auto;
    background-repeat: no-repeat;
    background-position: 400px 900px;
    grid-template-columns: 323px 276px;
    gap: 2.5rem 0.75rem;

  }
  ${ResponsiveTo('lg')}{
    background:url(${coins1}), url(${coins2});
    background-size: auto;
    background-repeat: no-repeat;
    background-position: 40px bottom, 97% 16%;
    grid-template-columns: 375px 342px;
    gap: 2.5rem 1.5rem;
  }
  ${ResponsiveTo('xl')} {
    grid-template-columns: 430px 365px;
    gap: 3rem 4rem;
  }
`
export const TitleBox = styled.div`
  width: 100%;
  h2, h3{
    text-align: center;
  }
  h2 {
    max-width: 500px;
    margin: 0 auto;
  }
  h3 {
    margin: 0.75rem auto 1rem;
    font-weight: 300;
    text-transform: none;
    font-size: 10px;
    line-height: 12px;
    max-width: 230px;
  }
  ${ResponsiveTo('md')}{
    grid-column: 1 / -1;
    h2 {
      max-width: 640px;
    }
    h3 {
      font-size: 13px;
      line-height: 16px;
      max-width: none;
    }
  }
  ${ResponsiveTo('xl')} {
    h2 {
      max-width: 870px;
    }
    h3 {
      font-size: 15px;
      line-height: 18px;
    }
  }
`

export const TextContainer = styled.div`
  font-size: 10px;
  line-height: 12px;
  max-width: 500px;
  margin: 0 auto;
  h4 {
    margin: 1rem 0 0.5rem;
    color: #12D466;
    font-weight: 300;
  }
  p {
    margin-bottom: 0.5rem;
  }
  ${ResponsiveTo('md')} {
    font-size: 13px;
    line-height: 16px;
    p {
      font-size: 13px;
      line-height: 16px;
    }
  }
  ${ResponsiveTo('xl')} {
    font-size: 15px;
    line-height: 18px;
    p {
      font-size: 15px;
      line-height: 18px;
    }
  }
`
export const Image = styled.div`
  width: 233.78px;
  height: 180.61px;
  background-image: url(${imgUtilMb});
  background-size: contain;
  background-repeat: no-repeat;
  grid-row: 2;
  ${ResponsiveTo('Tablet')}{
    width: 100%;
    height: 100%;
    background-image: url(${imgUtil});
    background-size: contain;
    background-repeat: no-repeat;
    grid-row-start: initial;
  }
  ${ResponsiveTo('lg')}{

  }
`
export const Ul = styled.ul`
  list-style: none;
  padding-left: 1em;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;
  li{
    color: white;
  }
  li::before{
    content: "•";
    color: #12D466;
    font-weight: bold;
    display: inline-block; 
    width: 1em;
    margin-left: -1em;
  }
  ${ResponsiveTo('md')}{
    li{
      font-size: 13px;
      line-height: 16px;
    }
  }
  ${ResponsiveTo('xl')}{
    li{
      font-size: 15px;
      line-height: 18px;
    }
  }
`
