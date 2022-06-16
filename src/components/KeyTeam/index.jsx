
import {
  Section,
  Title,
  Container,
  BubbleKey
} from './styles'

export default function KeyTeam () {
  const members = [
    {
      name: 'David van Herwaarde',
      position: 'Managing Director / Co-Founder'
    },
    {
      name: 'Terry Stone',
      position: 'Managing Director / Co-Founder / SVP Production'
    },
    {
      name: 'Alexis Johnson ',
      position: 'Business Strategy'
    },
    {
      name: 'Courtenay Semel',
      position: 'Head of USA Partnerships & Partner Onboarding'
    }
  ]
  return (
    <Section>
      <Title>
        The FILM<span>COIN</span> Key Team Members
      </Title>

      <Container>
        {
          members.map((item, index) => {
            return (
              <BubbleKey key={index}>
                <h3>
                  {item.position}
                </h3>
                <p>
                  {item.name}
                </p>
              </BubbleKey>
            )
          })
        }
      </Container>
    </Section>
  )
}
