import styled from 'styled-components'
import { TransparentButton } from '@/styles/buttonsStyles'
import { ResponsiveTo } from '@/hooks/useResponsive'

export const BuyFCSection = styled.div`
  width: 100%;
  display: block;
  hr{
    width: 80%;
  }
  hr:last-child{
    margin-top: 20px;
    
  }
  ${ResponsiveTo('lg')} {
    hr{
      max-width: 705px;
    }
  }
  ${ResponsiveTo('xl')} {
    hr{
      max-width: 868px;
    }
  }
  
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem 1rem 4rem;
  color: #fff;
  ${ResponsiveTo('420px')} {
    padding: 2rem 4rem 4rem;
  }
  ${ResponsiveTo('md')} {
    gap: 2rem;
    padding: 5rem;
  }
  ${ResponsiveTo('lg')} {
    
    padding: 80px 0;
    max-width: 705px;
    width: 100%;
    margin: 0 auto;
  }
  ${ResponsiveTo('xl')} {
    display: flex;
    flex-direction: row;
    padding: 80px 0;
    width: 100%;
    max-width: 868px;
    
    //margin: 0 auto;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${ResponsiveTo('md')} {
    width: 536px;
  }
  ${ResponsiveTo('xl')} {
    width: 630px;
    padding: 0;
    margin: 0;
  }
`
export const Title = styled.h2`
  padding: 0 40px;
  ${ResponsiveTo('md')}{
    padding: 0;
    letter-spacing: 0.06em;
  }
`
export const Content = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 130%;
  /* identical to box height, or 13px */
  text-align: center;
  ${ResponsiveTo('md')} {
    font-size: 19px;
    line-height: 130%;
    /* identical to box height, or 25px */

    text-align: center;
    text-transform: uppercase;
    max-width: initial;
  }
  ${ResponsiveTo('lg')} {

    line-height: 26.5px;
  }
`

export const Button = styled(TransparentButton)`
  font-family: 'Monument Extended', sans-serif;
  padding: 0.5rem ;
  margin-top: 0.938rem;
  width: 231px;
  background: rgba(0, 146, 66, 0.3);
  border: 1.5px solid #12D466;
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 1.25rem;
  line-height: 144.7%;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  
  ${ResponsiveTo('md')} {
    width: 531px;
    margin-bottom: 2rem;
  }
  ${ResponsiveTo('lg')} {
    margin: 0 auto;
    margin-top: 1rem;
  }
  ${ResponsiveTo('xl')} {
    width: 630px;
  }
`

export const DownloadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  ${ResponsiveTo('lg')} {
    grid-column-start: 2;
    grid-row: 1 / span 2;
  }
`

export const AssetsContainer = styled.div`
  display: flex;
  gap: 1.75rem;
`

export const Asset = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration:none;
  color: #12D466;
  gap: 0.5rem;
  svg {
    width: 4rem;
    path{
      fill: white;
    }
    ${ResponsiveTo('md')} {
      width: 80px;
      height: 94.68px;
    }
  }
  @media (hover: hover) {
    &:hover {
      h4 {
        text-decoration: underline;
      }
    }
  }
`

export const AssetTitle = styled.h4`
  font-family: 'Space Mono', 'Lucida Console', monospace;
  font-weight: 700;
  font-size: 10px;
  line-height: 116.5%;
  margin: 0;
  text-transform: uppercase;
  margin-top: 22px;
  ${ResponsiveTo('md')} {
    margin-top: 28px;
    font-size: 13px;
  }
  ${ResponsiveTo('lg')} {
    font-size: 0.875rem;
  }
`
