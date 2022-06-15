
import {
  Section,
  Title,
  Grid,
  AnimationContainer
} from './styles'
import animation from '@/images/aboutUs/worldAnimation.gif'

export default function Generation () {
  return (
    <Section>
      <Title>
        <h2>
          THE <span>GENERATION</span> FUELLING OUR ECOSYSTEMS <span>GROWTH</span>
        </h2>
        <p>
          We believe the “Next-Gen” millennials are, overwhelmingly,
          the generation fuelling our industries growth.
        </p>
      </Title>
      <Grid>
        <AnimationContainer>
          <img src={animation} alt='' />
        </AnimationContainer>
      </Grid>
    </Section>
  )
}
