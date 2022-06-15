import React from 'react'
import useSectionMenu from '@/hooks/useSectionMenu'
import {
  Grid,
  LiSubmenu,
  Section,
  Submenu,
  TextBox
} from './styles'

export default function BannerHome () {
  const goToSection = useSectionMenu()
  return (
    <Section>
      <Grid>
        <div>
          <TextBox>
            <h1>
            FILMCOIN NFT’s OFFER LIFE
            </h1>
            <h1>
            CHANGING OPPORTUNITIES FOR
            </h1>
            <h2>
              <span>
              $FLIKS TOKEN HOLDERS
              </span>
            </h2>
            <p>
            THROUGHOUT THE FILM, MUSIC & DIGITAL ARTWORK INDUSTRIES
            </p>
          </TextBox>
        </div>
        <div>
          <Submenu>
            <LiSubmenu> <p onClick={() => goToSection('NFT-section')}> NFT</p> </LiSubmenu>
            <LiSubmenu> <p onClick={() => goToSection('allows-everyone')}> Every one can be part of this</p> </LiSubmenu>
            <LiSubmenu> <p onClick={() => goToSection('utility-solutions')}> Solutions, Services & Benefits</p> </LiSubmenu>
            <LiSubmenu> <p onClick={() => goToSection('participate-in-filmcoin-section')}> Participate</p> </LiSubmenu>
            <LiSubmenu> <p onClick={() => goToSection('exchanges-section')}> Exchanges</p> </LiSubmenu>
            {/* <LiSubmenu> <p onClick={() => goToSection('tutorials')}>Tutorials</p> </LiSubmenu> */}
          </Submenu>
        </div>
      </Grid>
    </Section>
  )
}
