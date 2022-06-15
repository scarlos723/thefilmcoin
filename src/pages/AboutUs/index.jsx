import React, { useEffect } from 'react'
import BannerAboutUs from '../../components/BannerAboutUs'
import Seo from '@/components/Seo'
import {
  BgGradientFirst,
  BgGradientLast,
  BgGradientSecond,
  Container
} from './styles'
export default function AboutUs () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>

      <Container>
        <Seo title='About Us' />
        <BannerAboutUs />
        {/* <VideoSection />
        <BgGradientFirst>
          <section id='filmcoin-section'>
            <GlobalSolution />
          </section>
          <section id='expectation-section'>
            <RoadMap />
          </section>
          <section id='what-are-section'>
            <Goals />
          </section>
        </BgGradientFirst>
        <BgGradientSecond>
          <section id='launchpad-section'>
            <Launchpad />
          </section>
          <section id='generation-video-section'>
            <Generation />
          </section>
        </BgGradientSecond>
        <BgGradientLast>
          <section id='participate-section'>
            <BuyFC />
          </section>
          <section id='exchanges-section'>
            <Exchanges />
          </section>
        </BgGradientLast> */}
      </Container>
    </>
  )
}
