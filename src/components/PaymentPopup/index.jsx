

import { Section, Container, Text } from './styles'
import textLogo from '@/images/popup/FCTextLogo.png'

import { Link } from 'react-router-dom'

export default function PaymentPopup ({ token = '' }) {
  return (
    <Section>
      <Container>
        <img src={textLogo} alt='logo' />
        <Text>
          {/* <h1>
            Thank you for your interest in Film<span>Coin</span>. We will be contacting you as soon as possible.
          </h1> */}
          <h1>
            Thank you for interest in Film<span>Coin </span>
            Please click on the following link to process
            your payment
          </h1>
        </Text>
        {/* <Link to='/'>Go to home</Link> */}
        <Link to={`/payment2/?token=${token}`}> CLICK HERE </Link>
      </Container>

    </Section>
  )
}
