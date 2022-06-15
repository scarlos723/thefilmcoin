import styled from 'styled-components'
import { ResponsiveTo } from '@/hooks/useResponsive'
import { vibrateAnimation } from '@/styles/animations'

export const Container = styled.div`
  display: grid;
  width: 100%;
  place-content: center;
`
export const Grid = styled.div`
  display: flex;
  flex-direction: column;

  ${ResponsiveTo()}{
    display: grid;
    grid-template-columns: 1fr 4fr;
    padding: 100px 0;
    max-width: 1094px;
  }
`
export const IconsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 12px;
  margin: 0 auto;
  margin-top: 20px;
  
  //background: linear-gradient(179.67deg, #000000 46.38%, #004F21 99.71%);
  border-radius: 16px;
  width: 95%;
  #smart-contract-article{
    cursor: pointer;
    position: relative;
    border-radius: 8px;
    border: 1.5px solid #12D466;
    svg{
      ${vibrateAnimation({ time: '2s' })}
    }
    .hover-msg{
      display: none;
      position: absolute;
      background-color: white;
      color: #000000;
      padding: 20px 20px;
      border-radius: 40px;
      font-weight: bolder;
      font-size: 0.8rem;
      text-transform: uppercase;
      left: 0;
      width: 220px;
      box-shadow: 1px 2px 10px 0px #12D466;
    }
    &:hover{
      position: relative;
      svg{
        animation: none;
      }
      .hover-msg{
        display: block;
        a{
          color: #000000;
          text-transform: none;
          line-height: 1.2;
          word-break: break-word;
        }
      }
    }
  }
  ${ResponsiveTo('329px')}{
    #smart-contract-article .hover-msg {
      right: 0;
      left: initial;
    }
  }
  ${ResponsiveTo('Tablet')}{
    background: transparent;
    border-radius:0;
    width: 100%;
    padding: 0 5%;
    padding-top: 100px;
    margin: 0;
    justify-content: space-between;
    #smart-contract-article .hover-msg {
      right: -45%;
    }
  }
  ${ResponsiveTo()}{
    padding: 0;
    flex-direction: column;
    padding-right: 40px;
    border-right: 1px solid #12D466;
  }
`
export const Article = styled.article`
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  color: white;
  font-size: 0.625rem;
  line-height: 147%;
  min-width: 96px;
  max-width: 132px;
  padding: 8px;
  svg{
    margin-bottom: 4px;
    height: 44px;
  }
  small{
    font-weight:  lighter;
    line-height: 105%;
  }
  h4{
    margin: 0;
    font-weight: bold;
  }
  ${ResponsiveTo('Tablet')}{
    padding: 12px;
    small, h4{
      font-size: 0.875rem;
    }
  }


`
export const GraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .graph-container{
    width: 100%;
  }
  .params{
    width: 100%;
    display: flex;
    padding: 0 2%  0 6%;
    justify-content: space-between;
    margin-top: 110px;
    color: white;
    font-family: 'Montserrat';
    font-style: normal;
    
    font-weight: 300;
    line-height: 147%;
    div{
      text-align: center;
      h5{
        font-weight: bold;
      }
      h5,small{
        font-size: 0.4rem;
        
      }
    }
  }
  ${ResponsiveTo('Tablet')}{
    .params{
      div{
        h5{
          margin: 0;
        }
        h5,small{
          font-size: 0.875rem;
        }
      }
    }
  }
  ${ResponsiveTo('Tablet')}{
    justify-content: start;
    .graph-container{
      margin-top: 20px;
    }
  }
`
