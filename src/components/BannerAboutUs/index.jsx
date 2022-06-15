import React from 'react'
import {
  Col1,
  Col2,
  Container,
  Grid,
  Submenu
} from './styles'
import logoNeon from '@/images/aboutUs/logoNeon.png'
import useSectionMenu from '@/hooks/useSectionMenu'
import { LiSubmenu } from '../BannerHome/styles'
export default function BannerAboutUs () {
  const goToSection = useSectionMenu()
  return (
    <Container>
      <Grid>
        <Col1>
          <img src={logoNeon} alt='' />
          <h1>
          About us
          </h1>
        </Col1>
        <Col2>
          <Submenu>
            <div>
              <LiSubmenu><p onClick={() => goToSection('video-section')}>Showreel</p></LiSubmenu>
              <LiSubmenu><p onClick={() => goToSection('filmcoin-section')}>FILM<span>COIN</span> </p></LiSubmenu>
              <LiSubmenu><p onClick={() => goToSection('expectation-section')}>Expectations</p></LiSubmenu>
              <LiSubmenu><p onClick={() => goToSection('what-are-section')}>What are we doing?</p></LiSubmenu>
              <LiSubmenu><p onClick={() => goToSection('launchpad-section')}>FILM<span>COIN</span> The IDO Exchange Launchpad</p></LiSubmenu>
              <LiSubmenu><p onClick={() => goToSection('generation-video-section')}>The generation fuelling our ecosystems growth</p></LiSubmenu>
              <LiSubmenu><p onClick={() => goToSection('participate-section')}>Participate</p></LiSubmenu>
              <LiSubmenu><p onClick={() => goToSection('exchanges-section')}>Exchanges</p></LiSubmenu>
            </div>
          </Submenu>
        </Col2>
      </Grid>
    </Container>
  )
}
