import BannerOurTeam from '@/components/BannerOurTeam'
import KeyTeam from '@/components/KeyTeam'
import OperationalTeam from '@/components/OperationalTeam'

import Seo from '@/components/Seo'
import { useEffect } from 'react'
import Advisory from '@/components/Advisory'
import { BackGroundSection } from './styles'
export default function MeetOurTeam () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Seo title='Our team' description='Meet our team' />
      <BannerOurTeam />
      <BackGroundSection>
        <section id='key-members'>
          <KeyTeam />
        </section>
        <section id='operational-team'>
          <OperationalTeam />
        </section>
        <section id='advisor'>
          <Advisory />
        </section>
      </BackGroundSection>

    </div>
  )
}
