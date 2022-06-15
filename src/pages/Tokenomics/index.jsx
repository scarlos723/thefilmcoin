import Proposed from '@/components/Proposed'
import Exchanges from '@/components/Exchanges'
import BannerTokenomics from '@/components/BannerTokenomics'
import FirstGraph from '@/components/FirstGraph'
import SecondGraph from '@/components/SecondGraph'
import Forward from '@/components/Forward'
import {
  BgFirstGradient,
  BgGradientMobile,
  BgSecondGradient
} from './styles'
import Seo from '@/components/Seo'
import { useEffect } from 'react'

export default function Tokenomics () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Seo title='Tokenomics' />
      <BannerTokenomics />
      <BgGradientMobile>
        <BgFirstGradient>
          <section id='proposed-section'>
            <Proposed />
          </section>
          <section id='profit-section'>
            <FirstGraph />
            <SecondGraph />
          </section>
        </BgFirstGradient>
        <div style={{ width: '90%', maxWidth: 868, margin: '0 auto', marginTop: 0 }}>
          <coingecko-coin-compare-chart-widget coin-ids='film-coin' currency='usd' locale='en' />
        </div>
        <BgSecondGradient>
          <section id='we-are-looking-section'>
            <Forward />
          </section>
          <section id='exchange-section'>
            <Exchanges />
          </section>
        </BgSecondGradient>
      </BgGradientMobile>
    </>
  )
}
