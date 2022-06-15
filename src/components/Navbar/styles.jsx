import styled, { css } from 'styled-components'
import { ResponsiveTo } from '@/hooks/useResponsive'
import { TransparentButton } from '@/styles/buttonsStyles'
import { IoMdMenu, IoMdClose } from 'react-icons/io'

export const Nav = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 20;
  ${props => props.showmenu === 'true'
    ? css`background: rgba(0,0,0,0.9)`
    : css`background:  linear-gradient(
                180deg,
                rgba(0,0,0,1) 0%, 
                rgba(0,0,0,0.7) 50%, 
                rgba(0,0,0,0) 100%
              );`};
  ${ResponsiveTo('lg')}{
  background: linear-gradient(
                180deg,
                rgba(0,0,0,1) 0%, 
                rgba(0,0,0,0.7) 50%, 
                rgba(0,0,0,0) 100%
              );
  }
  
`
export const Head = styled.section`
  display: flex;
  flex-flow: row-reverse nowrap;
  justify-content: space-between;
  width: 76%;
  margin: 38px auto;
  align-items: center;
  
  ${ResponsiveTo('md')}{
    flex-flow: row-reverse nowrap;
    
  }
  ${ResponsiveTo('lg')}{
    display: grid;
    grid-template-columns: 1fr 7fr;
    place-content: center;
    align-items: center;
    width: 95%;
  }
  ${ResponsiveTo('xl')}{
    max-width: 1134px;
  }
`
export const ColMenu = styled.div`
  display: ${props => props.showmenu === 'true' ? 'flex' : 'none'};
  flex-flow: column nowrap;
  justify-content: start;
  align-items: center;
  padding-top: 100px;
  gap: 52px;
  position: absolute;
  left: 0;
  top: 120px;
  width:100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.9);
  transition: all 0.3s;

  ${ResponsiveTo('lg')}{
    padding-top: 0;
    display:flex;
    background-color: transparent;
    width:100%;
    height: auto;
    flex-flow: row nowrap;
    justify-content: flex-end;
    position: inherit;
  }
`

export const MenuIcon = styled(IoMdMenu)`
  display:${props => props.showmenu === 'true' ? 'none' : 'block'};
  margin-left: 56px;

  ${ResponsiveTo('md')}{
    margin-left: 56px;
    margin-right: 0;
  }
  ${ResponsiveTo('lg')}{
    margin-left: 85px;
    margin-left: 0;
    display: none;
  }

`
export const IconClose = styled(IoMdClose)`
  display: ${props => props.showmenu === 'true' ? 'block' : 'none'};
  margin-left: 56px;
  ${ResponsiveTo('md')}{
    margin-left: 0;
    margin-right: 56px;
  }
  ${ResponsiveTo('lg')}{
    display:none;
    
  }
`

export const IconContainer = styled.div`
  display: flex;
  width: 91px;
  height: 45px;
  a{
    width: 100%;
    height: 100%;
    svg{
      margin: 0;
    }
  } 
  ${ResponsiveTo('md')}{
    margin-right: 28px;
    order: 1;
  }
  ${ResponsiveTo('lg')}{
    order: unset;
    margin: 0;
  }
`

export const Menu = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  z-index: 2;
  text-align:left;
  transition: all .5s;
  gap: 25px;
  li{
    display: grid;
    place-content: center;
    transition: all .5s;
    cursor: pointer;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 15px;
    a{
      width:100%;
      text-decoration: none;
      text-transform: uppercase;
      color: rgb(153, 153, 153);
      text-shadow: 0px 0px 10px rgba(0,0,0,0.5);
    }
    &:hover{
      position: relative;
      transform: scale(1.2);
      a{
        color:white;
      }
    }
  }
  ${ResponsiveTo('lg')}{
    width:100%;
    flex-flow: row nowrap;
    justify-content: space-between;
    background-color: transparent;
    gap: 20px;
  }
`

export const Button = styled(TransparentButton)`
  display: block;
  color: white;
  background-color: rgba(18, 212, 102, 0.3);
  border-color:rgba(18, 212, 102);
  padding: 0;
  width: 150px;
  height: 35px;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 144.7%;
    font-family: 'Monument Extended';
  &:hover{
    background-color: rgba(256,256,256,1.2);
    color: rgba(18, 212, 102);
  }
  ${ResponsiveTo('md')}{
    display: block;
  }
`
export const ButtonMob = styled(Button)`
  display:none;
  width: 130px;
  height: 35px;
  font-size: 0.8rem;
  border-radius: 13px;
  ${ResponsiveTo('md')}{
    display: block;
  }
  ${ResponsiveTo('lg')}{
    display: none;
  }
`
