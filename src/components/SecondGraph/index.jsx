import {
  Container,
  ImgCoins1,
  ImgCoins2,
  ImgCoins3, Section
} from './styles'
import lottie from 'lottie-web'
import { useEffect, useRef } from 'react'
import secondGraph from '@/images/tokenomics/secondGraph.json'

export default function SecondGraph () {
  const gifcontainer = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: gifcontainer.current, // Required
      renderer: 'svg', // Required
      loop: true, // Optional
      autoplay: true, // Optional
      animationData: secondGraph // Name for future reference. Optional
    })
  }, [])

  return (
    <Section>
      <Container ref={gifcontainer} />
      <ImgCoins1 />
      <ImgCoins2 />
      <ImgCoins3 />
    </Section>
  )
}
