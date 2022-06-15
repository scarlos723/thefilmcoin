import React from 'react'
import {
  Container,
  Image,
  TextContainer,
  TitleBox, Ul
} from './styles/'
export default function UtilitySolutions () {
  return (
    <Container>
      <TitleBox>
        <h2>UTILITY SOLUTIONS, SERVICES &amp; BENEFITS OF FILM<span>COIN</span></h2>
        <h3>We aim to engage with our social media ecosystem via the dissemination of NFTs</h3>
      </TitleBox>
      <TextContainer>
        <h4>Creation of the FILMCOIN Marketplace</h4>
        <Ul>
          <li>We aim to create a community and drive engagement.</li>
          <li>We will drive engagement with our own NFT. </li>
          <li>Instant utility for FILMCOIN holders.</li>
        </Ul>
        <h4>FILMCOIN NFT Avatars</h4>
        <p>
        The NFT marketplace is a destination where FILM<span>COIN</span> NFT holders
        can buy, sell and trade film and television custom digital icons complete with Digital Certiﬁcates of Authenticity.
        </p>
        <Ul>
          <li>FILMCOIN NFT platform will support FIAT transactions.</li>
          <li>FILMCOINS allows  various other cryptocurrencies as consideration to purchase from the platform.</li>
          <li>We aim to release various themed and priced Avatars.</li>
          <li>Every Avatar will belong to a real person.</li>
          <li>They will automatically become part of a global community.</li>
        </Ul>
      </TextContainer>
      <Image className='image' />
    </Container>
  )
}
