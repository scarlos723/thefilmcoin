import React from 'react'
import { Link } from 'react-router-dom'

// styles
import {
  BlackCol,
  BlackFooter,
  Grid,
  SocialBar,
  SocialItem
} from './styles'

// icons
import { FaLocationArrow, FaDiscord, FaTelegramPlane, FaTiktok } from 'react-icons/fa'
import { IoLogoTwitter } from 'react-icons/io'
import { BsFacebook } from 'react-icons/bs'
import { AiOutlineInstagram } from 'react-icons/ai'

const Year = new Date().getFullYear()
export default function Footer () {
  return (
    <BlackFooter>
      <section>
        <SocialBar>
          <SocialItem href='https://twitter.com/TheFilmCoin_/?lang=en' target='_blank' rel='noopener noreferrer'>
            <IoLogoTwitter color='white' size={21} />
          </SocialItem>
          <SocialItem href='https://www.instagram.com/thefilmcoin/?hl=en' target='_blank' rel='noopener noreferrer'>
            <AiOutlineInstagram color='white' size={21} />
          </SocialItem>
          <SocialItem href='https://discord.gg/6kG5xNQwDA' target='_blank' rel='noopener noreferrer'>
            <FaDiscord color='white' size={21} />
          </SocialItem>
          <SocialItem href='https://www.facebook.com/The-Film-Coin-111549944695856' target='_blank' rel='noopener noreferrer'>
            <BsFacebook color='white' size={18} />
          </SocialItem>
          <SocialItem href='https://www.tiktok.com/@thefilmcoin?lang=en' target='_blank' rel='noopener noreferrer'>
            <FaTiktok color='white' size={18} />
          </SocialItem>
          <SocialItem href='https://t.me/thefilmcoinio' target='_blank' rel='noopener noreferrer'>
            <FaTelegramPlane color='white' size={21} />
          </SocialItem>
        </SocialBar>
      </section>
      <Grid>
        <BlackCol>
          <div className='copyright'>
            <small>Copyright © {Year} </small>
            <small> Darkhorse Film Studios  All Rights Reserved</small>
          </div>
        </BlackCol>
        <BlackCol>
          <div className='powered-by'>
            <strong>
              Powered by  Darkhorse Film Studios
            </strong>
          </div>
        </BlackCol>
        <BlackCol>
          <div className='policies'>
            <small>
              <Link to='/privacy'>PRIVACY POLICY </Link>
              <FaLocationArrow size={8} color='#12D466' />
            </small>
            <small>
              <Link to='/rules'>
                Our Social media &
                Forum House Rules
              </Link>
            </small>
          </div>
        </BlackCol>
      </Grid>
    </BlackFooter>
  )
}
