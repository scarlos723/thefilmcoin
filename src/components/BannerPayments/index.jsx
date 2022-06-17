import { Container, Grid } from './styles'

export default function BannerPayments ({ children }) {
  return (
    <Container>
      <Grid>
        <h1>You’re almost ready to join us and become part of the film<span>coin</span> family! </h1>
        {children}
      </Grid>
    </Container>
  )
}