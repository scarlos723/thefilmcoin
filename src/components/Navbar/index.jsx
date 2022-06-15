import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import {
  Nav,
  Menu,
  Head,
  IconContainer,
  Button,
  MenuIcon,
  ButtonMob,
  IconClose,
  ColMenu
} from './styles.jsx'

// import menuIcon from '../assets/icons/menuIcon.svg'
// import searchIcon from '../assets/icons/searchIcon.svg'
import textLogo from '@/icons/navbar/textLogoFcIcon.svg'

export default function Navbar () {
  const [showMenu, setShowMenu] = useState(false)
  const navigate = useNavigate()

  const handleOnClikMenu = () => {
    setShowMenu(false)
  }
  const handleButtonMobile = () => {
    setShowMenu(false)
    navigate('/payment1')
  }

  return (
    <Nav
      showmenu={showMenu.toString()}
    >
      <Head>
        <MenuIcon
          onClick={() => setShowMenu(true)}
          color='white'
          size={45}
          showmenu={showMenu.toString()}
        />
        <IconClose
          onClick={() => setShowMenu(false)}
          size={44} color='white'
          showmenu={showMenu.toString()}
        />
        <IconContainer>
          <Link to='/'>
            <img src={textLogo} alt="logo" />
          </Link>
        </IconContainer>
        <ColMenu
          showmenu={showMenu.toString()}
        >
          <Menu>
            <li> <NavLink className={({ isActive }) => isActive ? 'is-active' : ''} onClick={handleOnClikMenu} to='/aboutus'>About us</NavLink> </li>
            <li> <NavLink className={({ isActive }) => isActive ? 'is-active' : ''} onClick={handleOnClikMenu} to='/tokenomics'>Tokenomics</NavLink> </li>
            <li> <NavLink className={({ isActive }) => isActive ? 'is-active' : ''} onClick={handleOnClikMenu} to='/benefits'>Benefits</NavLink> </li>
            <li> <NavLink className={({ isActive }) => isActive ? 'is-active' : ''} onClick={handleOnClikMenu} to='/productions'>Productions</NavLink> </li>
            <li> <NavLink className={({ isActive }) => isActive ? 'is-active' : ''} onClick={handleOnClikMenu} to='/ourteam'>Meet our team</NavLink> </li>
            <li> <NavLink className={({ isActive }) => isActive ? 'is-active' : ''} onClick={handleOnClikMenu} to='/ambassadors'>Ambassadors</NavLink> </li>
            <li> <NavLink className={({ isActive }) => isActive ? 'is-active' : ''} onClick={handleOnClikMenu} to='/contact'>Contact</NavLink> </li>
            {/* <li> <NavLink className={({ isActive }) => isActive ? 'is-active' : ''} onClick={handleOnClikMenu} to='/buynow'>Join us</NavLink> </li> */}
            <li>  <Button onClick={handleButtonMobile}>Buy Now</Button></li>
          </Menu>

        </ColMenu>
        <ButtonMob onClick={() => navigate('/payment1')}>Buy Now</ButtonMob>
      </Head>
    </Nav>
  )
}
