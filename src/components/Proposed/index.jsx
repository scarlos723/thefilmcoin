import {
  Section,
  GreenBox,
  TitleBox,
  Description,
  Grid,
  Article,
  Title
} from './styles'

export default function Proposed () {
  return (
    <Section>
      <Title>
        Proposed <span>Tokenomics</span>
      </Title>
      <Grid>
        <GreenBox>
          <div>
            <TitleBox>
              Filmcoin
            </TitleBox>
            <Description>
              Token name
            </Description>
          </div>
          <div>
            <TitleBox style={{ color: '#12D466' }}>
              $FLIKS
            </TitleBox>
            <Description>
              Symbol
            </Description>
          </div>
          <div>
            <TitleBox>
              1,000,000,000
            </TitleBox>
            <Description>
              Token Issue
            </Description>
          </div>
        </GreenBox>
        <div className='article-container'>
          <Article>
            <Description>
              130,000,000
            </Description>
            <TitleBox>
              Circulated supply
            </TitleBox>
          </Article>
          <Article>
            <Description style={{ color: '#12D466' }}>USD $0.12C</Description>
            <TitleBox>Listing price</TitleBox>
          </Article>
        </div>
      </Grid>
    </Section>
  )
}
