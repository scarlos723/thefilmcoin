import { ContainerB, GridB } from './styles'
import {
  TextBox
} from '../BannerOurTeam/styles'
import logoNeon from '@/images/aboutUs/logoNeon.png'

export default function BannerAmbassadors () {
  return (
    <ContainerB>
      <GridB>
        <TextBox>
          <img src={logoNeon} alt='logo neon' />

          <h1>Ambassadors</h1>
        </TextBox>

      </GridB>

    </ContainerB>
  )
}
