import React, { useEffect } from 'react'
import Allows from '../../components/Allows'
import BannerHome from '../../components/BannerHome'
import ComingSoon from '../../components/ComingSoon'
import NFTSection from '../../components/NFTSection'
import Participate from '../../components/Participate'
import Popup from '../../components/Popup'
import Seo from '../../components/Seo'
import UtilitySolutions from '../../components/UtilitySolutions'
import { BgGradient } from './styles'

export default function Home () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div >
      <Seo />
      <Popup />
      <BannerHome />
      <section id='NFT-section'>
        <NFTSection />
        <ComingSoon />
      </section>

      <BgGradient>
        <section id='allows-everyone'>
          <Allows />
        </section>
        <section id='utility-solutions'>
          <UtilitySolutions />
        </section>
        <section id='participate-in-filmcoin-section'>
          <Participate />
        </section>
        {/* <section id='exchanges-section'>
          <Exchanges />
        </section>
        <section id='tutorials'>
          <Tutorials />
        </section> */}
      </BgGradient>

    </div>
  )
}
