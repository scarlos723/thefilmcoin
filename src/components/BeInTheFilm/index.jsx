import { Container, Grid, TextBox } from './styles'
import logoTftt from '@/images/productions/TFTTlogo.svg'
export default function BeInTheFilm () {
  return (
    <Container>
      <Grid>
        <div />
        <TextBox>
          <h2 style={{ textAlign: 'left' }}>Be in <br /> <span>the film</span></h2>
          <p>Register to be part of
            the team, in <strong>“TALES FROM THE <a href='https://talesfromthetrap.com/'>TRAP</a>”</strong> you can
            upload your own videos and
            get special VIP treatment for registering.
          </p>
          <img src={logoTftt} alt='logo tftt' />
        </TextBox>
      </Grid>
    </Container>
  )
}
