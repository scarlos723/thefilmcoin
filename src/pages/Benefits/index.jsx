import { useEffect } from 'react'
import BannerBenefits from '@/components/BannerBenefits'
import BenefitsBuying from '@/components/BenefitsBuying'
import Proposed from '@/components/Proposed'
import NFTSection from '@/components/NFTSection'
import Seo from '@/components/Seo'

export default function Benefits () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Seo title='Benefits' />
      <BannerBenefits />
      <div id='benefits'>
        <BenefitsBuying />
      </div>
      <div id='proposed'>
        <Proposed />
      </div>
      <div id='nft'>
        <NFTSection />
      </div>
    </>

  )
}
