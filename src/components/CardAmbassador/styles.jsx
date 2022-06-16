import styled from 'styled-components'
import { ResponsiveTo } from '@/hooks/useResponsive'

export const Card = styled.div`
  width: 124px;
  height: 164px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${ResponsiveTo('md')}{
    width: 178.01px;
    height: 244px;
  }
  ${ResponsiveTo('lg')}{
    width: 226px;
    height: 300px;
  }
  `

export const ImgContainer = styled.div` 
  position: relative;
  z-index: 3;
  width: 97.63px;
  height: 97.63px;
  background-color: gray;
  border-radius: 50%;
  img{
    width: 100%;
    height: 100%;
  }
  ${ResponsiveTo('md')}{
    width: 140.2px;
    height: 140.2px;
  }
  ${ResponsiveTo('lg')}{
    width: 178px;
    height: 178px;
  }
`
export const GreenBox = styled.div` 
  margin-top: -43px;
  padding-top: 43px;
  display: grid;
  place-content: center;
  position: relative;
  z-index: 2;
  width: 100%;
  height: 110.25px;
  border: 1px solid #12D466;
  box-sizing: border-box;
  border-radius: 18px;
  h5{
    font-family: 'Monument Extended';
    color:  #12D466;
    font-style: normal;
    font-weight: 400;
    font-size: 0.625rem;
    line-height: 105%;
    text-align: center;
    margin: 0;
  }
  p{
    text-align: center;
    font-size: 0.5rem;
    line-height: 105%;
  }
  ${ResponsiveTo('md')}{
    margin-top: -70px;
    padding-top: 70px;
    height: 100%;
    gap: 4px;
    h5{
      font-size: 0.813rem;
    }
    p{
      font-size: 0.625rem;
    }
    
  }
  ${ResponsiveTo('lg')}{
    margin-top: -80px;
    padding-top: 80px;
    gap: 8px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    h5 {
      font-size: 0.938rem;
      padding: 0 4px;
    }
    p{
      font-size: 0.813rem;
    }
  }
`

export const Ul = styled.ul`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 4px;
  li{
    display: grid;
    width: 10.97px;
    height: 10.97px;
    border-radius: 50%;
    img{
      width: 100%;
      height: 100%;
    }
  }
  ${ResponsiveTo('md')}{
    gap: 6px;
    li{
      width: 15.75px;
      height: 15.75px;
    }

  }
  ${ResponsiveTo('lg')}{
    margin-top: 12px;
    gap: 8px;
    li{
      width: 20px;
      height: 20px;
    }
  }
`
