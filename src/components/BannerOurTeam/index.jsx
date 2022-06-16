import {
  Container,
  TextBox,
  SubmenuBox,
  Submenu1,
  Grid
} from './styles'
import logoNeon from '@/images/aboutUs/logoNeon.png'
import useSectionMenu from '@/hooks/useSectionMenu'
import { LiSubmenu } from '../BannerHome/styles'

export default function BannerOurTeam () {
  const goToSection = useSectionMenu()
  return (
    <Container>
      <Grid>
        <TextBox>
          <img src={logoNeon} alt='logo neon' />
          <h1>Meet Our Team</h1>
        </TextBox>
        <SubmenuBox>
          <Submenu1>
            <LiSubmenu>
              <p onClick={() => goToSection('key-members')}>Key members</p>
            </LiSubmenu>
            <LiSubmenu>
              <p onClick={() => goToSection('operational-team')}>Operational team</p>
            </LiSubmenu>
            <LiSubmenu>
              <p onClick={() => goToSection('advisor')}>Advisors</p>
            </LiSubmenu>
          </Submenu1>
        </SubmenuBox>
      </Grid>
    </Container>
  )
}
