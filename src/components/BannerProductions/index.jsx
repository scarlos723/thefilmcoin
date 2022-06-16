
import {
  Section,
  Container,
  TexBox,
  Title,
  BoxButtons,
  Grid,
  SubmenuContainer,
  Submenu
} from './styles'
import useSectionMenu from '@/hooks/useSectionMenu'
import { LiSubmenu } from '../BannerHome/styles'

export default function BannerProductions () {
  const goToSection = useSectionMenu()
  return (
    <Section>
      <Container>

        <Grid>
          <SubmenuContainer>
            <Submenu>
              <LiSubmenu> <p onClick={() => goToSection('step-into-trap')}>Step into trap</p> </LiSubmenu>
              <LiSubmenu> <p onClick={() => goToSection('experience-trap')}>Experience the trap</p> </LiSubmenu>
            </Submenu>
          </SubmenuContainer>
          <TexBox>
            <Title>
              TALES FROM THE <span>TRAP</span>
            </Title>
            <p>Coming soon</p>
          </TexBox>
          <BoxButtons>

            <a href='https://talesfromthetrap.com/'>Film Synopsis</a>
            <a href='https://talesfromthetrap.com/'>Be in the Film</a>
          </BoxButtons>
        </Grid>
      </Container>
    </Section>
  )
}
