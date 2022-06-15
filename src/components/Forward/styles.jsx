import styled from 'styled-components'
import bgImag from '@/images/tokenomics/imgBgFordward.png'
import coin from '@/images/tokenomics/coinFordward.svg'
import { ResponsiveTo } from '@/hooks/useResponsive'

export const Container = styled.div`
  background-image: url(${bgImag});
  background-repeat: no-repeat;
  background-position:  center bottom;
  background-size: 90%;
  width: 100%;
  height: 500px;
  padding: 0 20px;
  position: relative;
  ${ResponsiveTo('md')}{
    background-size:  contain;
    background-position: 40px top;
    height: 680px;
    
  }
  ${ResponsiveTo('lg')}{
    display: grid;
    place-content: center;
    background-image:  url(${bgImag}), url(${coin});
    background-repeat:  no-repeat, no-repeat;
    background-size: auto, auto;
    background-position:  left center, 95% top; 
    height: 60vh;
  }
  ${ResponsiveTo('xl')}{
    background-size: 700px, auto;
  }

`
export const Grid = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  ${ResponsiveTo('lg')}{
    display: grid;
    grid-template-columns: 1fr 3fr;
    place-content: center;
    max-width: 1098px;
    margin: 0 auto;
  }
`
export const TexBox = styled.section`
  display:flex;
  flex-direction: column;
  color: white;
  gap: 32px;
  

  ${ResponsiveTo('md')}{
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    max-width: 648px;
    margin: 0 auto;
    h2{
      text-align: left;
    }
  }
  ${ResponsiveTo('lg')}{
    grid-column: 2;
    width: 100%;
  
    p{
      width: 332px;
    }
  }
`
