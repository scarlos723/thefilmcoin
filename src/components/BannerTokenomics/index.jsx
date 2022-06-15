import {
  Container,
  Section,
  TextBoxImg
} from './styles'
import { LiSubmenu } from '../BannerHome/styles'
import { Submenu } from '../BannerAboutUs/styles'
import useSectionMenu from '@/hooks/useSectionMenu'
import logoNeon from '@/images/aboutUs/logoNeon.png'

export default function BannerTokenomics () {
  const goToSection = useSectionMenu()

  return (
    <Section>
      <Container>
        <TextBoxImg>
          <img src={logoNeon} alt='' />
          <h1 className='title'>Tokenomics</h1>
        </TextBoxImg>
        <div className='submenu-container'>
          <Submenu>
            <LiSubmenu> <p onClick={() => goToSection('proposed-section')}>Proposed tokenomics</p> </LiSubmenu>
            <LiSubmenu> <p onClick={() => goToSection('profit-section')}>Cliff and Vesting</p> </LiSubmenu>
            <LiSubmenu> <p onClick={() => goToSection('we-are-looking-section')}>We are looking forward</p> </LiSubmenu>
            <LiSubmenu> <p onClick={() => goToSection('exchange-section')}>Exchange</p> </LiSubmenu>

          </Submenu>
        </div>
      </Container>
    </Section>
  )
}
