import { useNavigate } from 'react-router-dom'
// Styles
import {
  Section,
  Grid,
  GreenButton,
  Title,
  Image
} from './styles'
import buyFC from '@/images/benefits/buyingFC.png'

export default function BenefitsBuying () {
  const navigate = useNavigate()
  return (
    <Section>
      <Grid>
        <Title>
          Benefits of buying FILM<span>COIN</span>
        </Title>
        <Image src={buyFC} alt='Woman experiencing virtual FilmCoin' />
        <ul>
          <li>Initial Dex Offering scheduled April 2022</li>
          <li>Limited token offering</li>
          <li>Internationally recognised senior executive team</li>
          <li>Blockchain powered technology</li>
          <li>Fast and secure transaction speeds</li>
          <li>Multiple exchange compatible (tokenomics)</li>
          <li>Access to a stabilised worldwide ecosystem</li>
          <li>Fantastic 2022/23 production slate</li>
        </ul>
        <GreenButton onClick={() => navigate('/payment1')}>Buy Now</GreenButton>
      </Grid>

    </Section>
  )
}
