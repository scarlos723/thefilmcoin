import React, { useEffect } from 'react'
import BannerAboutUs from '../../components/BannerAboutUs'
import Seo from '@/components/Seo'
import {
  BgGradientFirst,
  BgGradientLast,
  BgGradientSecond,
  Container
} from './styles'
import VideoSection from '@/components/VideoSection'
import GlobalSolution from '@/components/GlobalSolution'
import RoadMap from '@/components/RoadMap'
import Disrupting from '@/components/Disrupting'
import Launchpad from '@/components/Launchpad'
import Generation from '@/components/Generation'
import Participate from '@/components/Participate'
import Exchanges from '@/components/Exchanges'
export default function AboutUs () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>

      <Container>
        <Seo title='About Us' />
        <BannerAboutUs />
        <VideoSection />
        <BgGradientFirst>
          <section id='filmcoin-section'>
            <GlobalSolution />
          </section>
          <section id='expectation-section'>
            <RoadMap />
          </section>
          <section id='what-are-section'>
            <Disrupting />
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
            <Participate />
          </section>
          <section id='exchanges-section'>
            <Exchanges />
          </section>
        </BgGradientLast>s
      </Container>
    </>
  )
}
