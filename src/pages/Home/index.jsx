import React, { useEffect } from 'react'
import BannerHome from '../../components/BannerHome'
import Popup from '../../components/Popup'
import Seo from '../../components/Seo'

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
        {/* <NFTSection />
        <CommingSoonFc /> */}
      </section>

      {/* <BgGradient>
        <section id='allows-everyone'>
          <Allows />
        </section>
        <section id='utility-solutions'>
          <UtilitySolutions />
        </section>
        <section id='participate-in-filmcoin-section'>
          <BuyFC />
        </section>
        <section id='exchanges-section'>
          <Exchanges />
        </section>
        <section id='tutorials'>
          <Tutorials />
        </section>
      </BgGradient> */}

    </div>
  )
}
