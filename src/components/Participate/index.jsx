import React from 'react'
import { useNavigate } from 'react-router-dom'
// styles
import {
  Asset,
  AssetsContainer,
  AssetTitle,
  Button,
  BuyFCSection,
  Container,
  Content,
  DownloadContainer,
  TextContainer,
  Title
} from './styles'
// icons
import { ReactComponent as DocIcon } from '@/icons/home/DocIcon.svg'
import { ReactComponent as AssetIcon } from '@/icons/home/AssetIcon.svg'

export default function Participate () {
  const navigate = useNavigate()
  return (
    <BuyFCSection>
      <hr className='custom-bottom-line' />
      <Container>
        <TextContainer>
          <Title>Participate in FILM<span>COIN</span></Title>
          <Content>The Motion Picture Digital Currency Of Choice</Content>
          <Button onClick={() => navigate('/payment1')}>Buy Now</Button>
        </TextContainer>

        <DownloadContainer>
          <AssetsContainer>
            <Asset
              href='https://drive.google.com/file/d/1ClGjZSNDBe91Svnx5QefAxQWOiSEWZc-/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
            >
              <DocIcon />
              <AssetTitle>Whitepaper</AssetTitle>
            </Asset>
            <Asset
              href='https://drive.google.com/file/d/1ltU_AIBqkt8FdpJHDKgAr0UXsltYQtMm/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
            >
              <AssetIcon />
              <AssetTitle>Litepaper</AssetTitle>
            </Asset>
          </AssetsContainer>
        </DownloadContainer>
      </Container>
      <hr className='custom-bottom-line' />
    </BuyFCSection>

  )
}
