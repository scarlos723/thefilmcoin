import styled from 'styled-components'
import { ResponsiveTo } from '@/hooks/useResponsive'

export const PopupWrapper = styled.div`
  display: ${props => props.showPopup ? 'flex' : 'none'};
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.showPopup ? 'rgb(0, 0, 0,0.7)' : 'transparent'};
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 20;
  overflow:hidden;
  transition: all 1s;

`

export const Container = styled.div`
  width: 100%;
  margin: auto auto;
  background-color: black;
  border-radius: 2.5rem;
  padding: 2.5rem 1rem 2rem 1.25rem;
  gap: 0.75rem;
  position: relative;
  max-width: 350px;
  box-shadow: 4px 4px 9px 4px rgba(0, 0, 0, 0.25);
  color: white;
  font-family: 'Monument Extended';
  font-style: normal;
  font-weight: 400;
  transition: all 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1{
    text-align: center;
    font-size: 1rem;
    text-transform: uppercase;
    span{
        color: #12D466;
      }
  }
  p{
    text-align: center;
    color: #12D466;
    text-transform: uppercase;
  }
  .green-text{
    span{
      font-style: italic;
    }
  }
  button{
    padding: 8px 32px;
    margin-top: 32px;
    margin-bottom: 20px;
  }
  
  ${ResponsiveTo('md')}{
    max-width: 558px;
    button{
      padding: 8px 100px;
      margin-top: 56px;
    }
  }

  ${ResponsiveTo('lg')}{
    display: flex;
    max-width: 588px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    height: auto;
    padding: 48px 32px;
    h1{
      font-size: 1.3rem;
  
    }
    p{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 116.5%;
        /* or 23px */
        
        letter-spacing: -0.05em;
    }
    .green-text{
        margin: 0;
      font-size: 16px;
      line-height: 116.5%;
    }
  


  }
  ${ResponsiveTo('xxl')}{
    
    gap: 1.5rem;
    padding: 0 3.5rem 2rem 3rem;
    button{
      font-size: 1rem;
    }
  }

`

export const CloseBtn = styled.div`
  width: 0.75rem;
  cursor: pointer;
  position: absolute;
  top: 18px;
  right: 21px;
  color: #009242;
  img{
    width: 100%;
  }
  ${ResponsiveTo('lg')}{
    width: 1rem;
    right: 4%;
  }
  ${ResponsiveTo('xxl')}{
    width: 1.25rem;
    right: 5%;
  }
`
export const Title = styled.div`
  font-family: 'Monument Extended';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 116.5%;
  /* or 23px */
  text-align: center;
  letter-spacing: -0.05em;
  text-transform: uppercase;
  margin-top: 32px;
  span{
    color: #12D466;
  }
`
export const Logo = styled.div`
  display: grid;
  place-content: center;
  place-items: center;
  img{
    width: 30%;
  }
  ${ResponsiveTo('md')} {
    margin-bottom: 40px;
  }
  
`

export const Description = styled.div`
  font-family: 'Montserrat';
  text-align: center;
  font-size: 0.938rem;
  line-height: 116.5%;
  /* or 17px */
  text-align: center;
  letter-spacing: -0.05em;
  ${ResponsiveTo('md')}{
    font-size: 1.25rem;
    margin-top:-10px;
    margin-bottom: 0px;
  }

`
export const SmallText = styled.span`
  display: grid;
  font-size: 0.75rem;
  line-height: 1.2;
  align-self: center;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  color:#009242;
  ${ResponsiveTo('lg')}{
    font-size: 1rem;
  }
`
