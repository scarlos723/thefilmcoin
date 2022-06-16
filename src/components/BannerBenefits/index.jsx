import {
  Col1,
  Col2,
  Grid,
  Section,
  Submenu
} from './styles'
import neonImg from '@/images/aboutUs/logoNeon.png'
import { LiSubmenu } from '../BannerHome/styles'
import useSectionMenu from '@/hooks/useSectionMenu'

export default function BannerBenefits () {
  const goToSection = useSectionMenu()

  return (
    <Section>
      <Grid>
        <Col1>
          <img src={neonImg} alt='Neon Logo' />
          <h1>Benefits</h1>
        </Col1>
        <Col2>
          <Submenu>
            <div>
              <LiSubmenu><p onClick={() => goToSection('benefits')}>Benefits</p></LiSubmenu>
              <LiSubmenu><p onClick={() => goToSection('proposed')}>Proposed utility</p></LiSubmenu>
              <LiSubmenu><p onClick={() => goToSection('nft')}>NFT</p></LiSubmenu>
            </div>
          </Submenu>
        </Col2>
      </Grid>
    </Section>
  )
}
