
import {
  Container,
  Grid,
  Title
} from './styles'

export default function IntoTheTrap () {
  function goTo (path) {
    window.location.href = path
  }
  return (
    <Container>
      <Title>Step <span>into</span> the trap</Title>
      <Grid>
        <article onClick={() => goTo('https://talesfromthetrap.com/')} />
        <article onClick={() => goTo('https://talesfromthetrap.com/')} />
        <article onClick={() => goTo('https://talesfromthetrap.com/')} />
      </Grid>
    </Container>
  )
}
