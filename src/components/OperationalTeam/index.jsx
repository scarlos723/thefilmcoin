
import {
  Title
} from '../KeyTeam/styles/'
import {
  Section1,
  BubbleOp,
  Container1
} from './styles'

export default function OperationalTeam () {
  const members = [
    {
      name: 'LightNode Media',
      position: 'HEAD OF GLOBAL COMMUNITY ENGAGEMENT'
    },
    {
      name: 'George Papadogiannis',
      position: 'HEAD OF E-cOMMERCE'
    },
    {
      name: 'Valentina Solano',
      position: 'PROJECT MANAGEMENT'
    },
    {
      name: 'Paul Carroll',
      position: 'HEAD OF PROJECT US'
    },
    {
      name: 'Sen Kantha',
      position: 'lead engineer, blockchain'
    },
    {
      name: 'FMFW.io',
      position: 'TOKENOMICS CREATION & LIFECYCLE'
    },
    {
      name: 'Francis Tejada',
      position: 'Design front end'
    },
    {
      name: 'Paul Caroll',
      position: 'MARKETING USA/CANADA'
    },
    {
      name: 'Andrea Barraza',
      position: 'Social media management'
    },
    {
      name: 'LightNode Media LLC',
      position: 'Discord channel'
    },
    {
      name: 'In-house Development',
      position: 'NFT PLATFORM'
    },
    {
      name: 'Various',
      position: 'NFT/ general artwork'
    }
  ]
  return (
    <>
      <Section1>
        <Title>
          FILM<span>COIN</span> Operational Team
        </Title>

        <Container1>
          {
            members.map((item, index) => {
              return (
                <BubbleOp key={index}>
                  <h3>
                    {item.position}
                  </h3>
                  <p>
                    {item.name}
                  </p>
                </BubbleOp>
              )
            })
          }
        </Container1>

      </Section1>

    </>
  )
}
