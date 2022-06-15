import React, { useRef, useEffect } from 'react'
import {
  Section,
  Grid,
  ImageContainer
} from './styles'
import gifData from '@/images/home/allow-gif.json'
import lottie from 'lottie-web'

export default function Allows () {
  const gifcontainer = useRef(null)
  useEffect(() => {
    lottie.loadAnimation({
      container: gifcontainer.current, // Required
      renderer: 'svg', // Required
      loop: true, // Optional
      autoplay: true, // Optional
      animationData: gifData // Name for future reference. Optional
    })
  }, [])
  return (
    <Section>
      <Grid>
        <h2>
        film<span>Coin</span> allows <span>Everyone</span> To Participate In Film &amp; Television
        </h2>
        <ImageContainer ref={gifcontainer} />
      </Grid>
    </Section>
  )
}
