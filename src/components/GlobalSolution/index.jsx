import { useState } from 'react'
import {
  Container,
  Title,
  Text,
  HiddenBlock,
  LearnMore,
  LogoImage
} from './styles'
import logo from '@/images/aboutUs/logoNeon.png'
import { useResize } from '@/hooks/useResize'

import lineBottom from '@/images/aboutUs/bottomGlobalSolution.svg'
const completeText = 'FILM<em>COIN</em> aims to decentralize the film and television content production industries; we propose to create an ecosystem for the existing and to be developed film and television production markets with transparent  rewards catered to the participants’ role and contribution.\n\nParticipants in FILM<em>COIN</em> will have the option to experience a new ecosystem by taking upon the role of a creator, curator, translator, reviewer, viewer and much more.\n\nFILM<em>COIN</em> aims to tokenise both new and previously released film and television productions.\n\nFILM<em>COIN</em> will run blockchain-based online file sharing programs specifically aimed to discover potential new Actors, Writers, Directors, Producers, Production Crew, Musicians and talented new creators.\n\nFILM<em>COIN</em> will potentially reward creators immediately according to the blockchain based smart contract once the creator uploads and users purchase their content. Creators will be provided with insights from their own followers and viewer data, such as gender, age, and traffic source. The insight will help creators to develop and cater content in order to satisfy their own targeted audience.'
const mobileText = 'FILM<em>COIN</em> aims to decentralize the film and television content production industries; we propose to create an ecosystem for the existing and to be developed film and television production markets with transparent  rewards catered to the participants’ role and contribution.\n\n Participants in FILM<em>COIN</em> will have the option to experience a new ecosystem by taking upon the role of a creator, curator, translator, reviewer, viewer and much more.\n'

export default function GlobalSolution () {
  const [isVisible, setIsVisible] = useState(false)
  const [mainContent, setMainContent] = useState('')

  useResize(() => {
    if (window.innerWidth < 768) {
      setMainContent(mobileText)
    } else {
      setMainContent(completeText)
    }
  })

  const handleClick = () => {
    setIsVisible(!isVisible)
  }
  return (
    <Container>
      <LogoImage src={logo} alt='Filmcoin neon logo' />
      <Title>
      FILM<span>COIN</span>, THE GLOBAL SOLUTION TO A GLOBAL PROBLEM
      </Title>
      <Text dangerouslySetInnerHTML={{ __html: mainContent }} />
      <LearnMore
        onClick={handleClick}
        isVisible={isVisible}
      >
      Learn More
      </LearnMore>
      <Text>
        <HiddenBlock isVisible={isVisible}>
        FILM<em>COIN</em> aims to tokenise both new and
        previously released film and television productions.{'\n'}
          {'\n'}
        FILM<em>COIN</em> will run blockchain-based online
        file sharing programs specifically aimed to discover
        potential new Actors, Writers, Directors, Producers,
        Production Crew, Musicians and talented new creators.{'\n'}
          {'\n'}
        FILM<em>COIN</em> will potentially reward creators
        immediately according to the blockchain based smart
        contract once the creator uploads and users purchase
        their content. Creators will be provided with insights
        from their own followers and viewer data, such as
        gender, age, and traffic source. The insight will
        help creators to develop and cater content in
        order to satisfy their own targeted audience.{'\n'}
          {'\n'}
        </HiddenBlock>
      </Text>
      <div className='bottom-line-container'>
        <img src={lineBottom} alt='bottom line image' />
      </div>
    </Container>
  )
}
