import React, { useEffect } from 'react'
import { useCountdown } from '../../hooks/useCountdown'
import {
  Circle,
  Container,
  CountContainer,
  Element,
  Section,
  Title
} from './styles'

export default function ComingSoon () {
  const [
    dataCounter,
    startTimer] = useCountdown()

  useEffect(() => startTimer, [])
  return (
    <Section>
      <Container>
        <Title>
        Keep in track! our whitelist opens in
        </Title>
        <CountContainer>
          {
            dataCounter.map((item, index) => {
              return (

                <Element key={index}>
                  <Circle>
                    <h1>{item.value}</h1>
                    <p>{item.name}</p>
                  </Circle>
                  <div className='puntos'>
                    <h1>:</h1>
                  </div>

                </Element>

              )
            })
          }
        </CountContainer>
      </Container>
    </Section>
  )
}
