import { useEffect } from 'react'
import BannerProductions from '@/components/BannerProductions'
import Seo from '@/components/Seo'
import FilmSynopsis from '../../components/FilmSynopsis'
import BeInTheFilm from '../../components/BeInTheFilm'
import IntoTheTrap from '../../components/IntoTheTrap'
import CommingSoonTftt from '../../components/ComingSoonTftt'

export default function Productions () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Seo title='Movie Productions' />
      <main>
        <BannerProductions />
        <FilmSynopsis />
        <BeInTheFilm />
        <section id='step-into-trap'>
          <IntoTheTrap />
        </section>
        <section id='experience-trap'>
          <CommingSoonTftt />
        </section>
      </main>
    </>
  )
}
