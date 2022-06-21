import styled, { css } from 'styled-components'

export const ButtonAction = styled.div`
 //background-color: #9966FF;
  background-color: black;
  border: 1px solid white;
  display: grid;
  border-radius: 12px;
  grid-template-columns: 3fr 1fr;
  height: 40px;
  cursor: pointer;
  /* box-shadow: 7px 5px 18px 0 #12D466; */
  div{
    display: grid;
    place-content: center;
    width: 100%;
    height: 100%;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
  }
  div:last-child{
    background-color: #9966FF;
    border-radius: 0 12px 12px 0;
  }
`
export const Slide = styled.div`
  display: flex;
  padding: 0 20px ;
  height: 0;
  overflow: hidden;
  transition: all 0.3s;
  
  section{
    display: grid;
    background-color: #ffffff;
    border: 1px solid white;
    padding: 20px;
    width: 100%;
    height: 100%;
    border-radius: 0 0 12px 12px;
  }
  ${props => props.show && css`
    height: 100px;  

  `}
`
export const Form = styled.form`
  display: grid;
  
`
export const BuyButton = styled.button`
  background-color: #2F2F58;
  color: white;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  width: 200px;
  padding: 10px 20px;
  border-radius: 4px;
  margin: 0 auto;
  margin-top: 12px;
`
