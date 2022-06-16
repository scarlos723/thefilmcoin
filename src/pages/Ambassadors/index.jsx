import BannerAmbassadors from '@/components/BannerAmbassadors'
import Card from '@/components/CardAmbassador'
import {
  CardContainer,
  SectionBackground,
  Title
} from './styles'
import { DataAmbassadors } from '@/hooks/useAmbassadors'

export default function Ambassadors () {
  const dataCards = DataAmbassadors()
  return (
    <div>
      <BannerAmbassadors />
      <SectionBackground>
        <Title>Meet our <span>ambassadors</span></Title>
        <CardContainer>
          {
            dataCards.map((item, index) => {
              return (
                <Card key={index} info={item} />
              )
            })
          }
        </CardContainer>
      </SectionBackground>

    </div>
  )
}
