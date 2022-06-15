import {
  Contain,
  Container,
  Grid,
  TextBox
} from './styles'

export default function Tutorials () {
  return (
    <Container>
      <Contain>
        <h2>Tutorials</h2>
        <Grid>
          <TextBox>
            <h5>Join the <span>revolution</span></h5>
            <p>And discover the Film<span>Coin</span> world</p>
          </TextBox>
          <div className='video-container'>
            <iframe src='https://www.youtube.com/embed/QuIWh-1DtMI' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />

          </div>
          <div className='video-container'>
            <iframe src='https://www.youtube.com/embed/ddASs2h0Kgw' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
          </div>
        </Grid>
      </Contain>

    </Container>
  )
}
