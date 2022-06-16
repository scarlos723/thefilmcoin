import {
  ContainerAdv,
  Section2,
  BubbleAdv
} from './styles'
import {
  Title
} from '../KeyTeam/styles'

export default function Advisory () {
  const members = [
    {
      name: 'Nelson Merchan Jr.',
      position: 'DAO / Tokenomics'
    },
    {
      name: 'Paul Carroll',
      position: 'Operations Coordination'
    },
    {
      name: 'Danish Chaudhry',
      position: 'Cryptocurrency Exchange Onboarding'
    },
    {
      name: 'Westpark Capital LLC',
      position: 'DIGITAL FINANCING US / NORTH AMERICA'
    },

    {
      name: 'Erick Benz',
      position: 'Metaverse'
    }
  ]
  return (
    <>
      <Section2>
        <Title>Film<span>coin</span> Advisory</Title>
        <ContainerAdv>
          {
            members.map((item, index) => {
              return (
                <BubbleAdv key={index}>
                  <h3>
                    {item.position}
                  </h3>
                  <p>
                    {item.name}
                  </p>
                </BubbleAdv>
              )
            })
          }
        </ContainerAdv>
      </Section2>
    </>
  )
}
