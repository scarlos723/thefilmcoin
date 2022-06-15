import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import textLogo from '@/images/popup/FCTextLogo.png'
import closeImg from '@/icons/popup/CloseIcon.svg'
// styles
import {
  // Button,
  CloseBtn,
  Container,
  Description,
  PopupWrapper,
  Logo,
  Title
} from './styles'
export default function Popup () {
  const [showPopup, setShowPopup] = useState(true)
  const navigate = useNavigate()
  return (
    <PopupWrapper
      id='index-popup'
      showPopup={showPopup}
    >
      <Container showPopup={showPopup}>
        <CloseBtn onClick={() => setShowPopup(false)} style={showPopup ? { display: 'flex' } : { display: 'none' }}>
          <img src={closeImg} alt='' />
        </CloseBtn>
        <Logo style={showPopup ? { display: 'grid' } : { display: 'none' }}>
          <img
            src={textLogo}
            alt='Logo filmcoin'
          />
        </Logo>
        <Title
          style={showPopup ? { display: 'block' } : { display: 'none' }}
        >
        Changing the film industry <span>forever</span>
        </Title>
        <Description style={showPopup ? { display: 'flex' } : { display: 'none' }}>
        The Motion Picture Digital Currency of Choice
        </Description>
        <button className='green-btn' onClick={() => navigate('/payment1')}>Buy Now</button>
        <p className='green-text'>Public sale now live</p>
      </Container>

    </PopupWrapper>
  )
}
