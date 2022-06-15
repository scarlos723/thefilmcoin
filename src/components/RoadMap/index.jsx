import { Container, Title } from './styles'
import roadmapL from '@/images/aboutUs/roadmapL.png'
import roadmapM from '@/images/aboutUs/roadmapM.png'
import roadmapS from '@/images/aboutUs/roadmapS.png'
// import imgRow from '../assets/icons/greenRow2.svg'
// import { ReactComponent as GreenPing } from '../assets/icons/GreenPing.svg'
export default function RoadMap () {
  return (
    <div>
      <Title>Road Map </Title>

      <Container>
        <img className='roadmap-L' src={roadmapL} alt='' />
        <img className='roadmap-M' src={roadmapM} alt='' />
        <img className='roadmap-S' src={roadmapS} alt='' />
      </Container>

    </div>
  )
}
