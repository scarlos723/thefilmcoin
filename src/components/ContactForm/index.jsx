import { useState } from 'react'
import {
  Button,
  Checkbox,
  Container,
  Description,
  Form,
  Input,
  Label,
  Section,
  TermsContainer,
  TextArea,
  Title
} from './styles'

export default function ContactForm () {
  // eslint-disable-next-line
  const [sent, setSent] = useState(false)

  let content
  if (!sent) {
    content = (
      <>
        <Container>
          <Title>Do you <em>Wanna talk</em> with us?</Title>
          <Description>
            Wanna talk with us? Let us know the deal
            and we will message you shortly.
          </Description>
          <Form>
            <div>
              <Label required>Contact Mail</Label>
              <Input type='email' placeholder='Enter email address' />
            </div>
            <div>
              <Label required>Phone Number</Label>
              <Input type='phone' />
            </div>
            <div>
              <Label required>Subject</Label>
              <Input type='text' placeholder='What’s up?' />
            </div>
            <div>
              <Label required>Let us know</Label>
              <TextArea placeholder='Message' />
            </div>
            <TermsContainer>
              <Checkbox checked />
              <Label>I agree to terms &amp; conditions</Label>
            </TermsContainer>
            <Button>Send</Button>
          </Form>
        </Container>
      </>
    )
  } else {
    content = (
      <>
        <Container>
          <Title sent>Thank <em>You!</em></Title>
          <Description>
            We will be reading your request and we will contact you as soon as possible
          </Description>
        </Container>
      </>
    )
  }

  return (
    <Section>
      {content}
    </Section>
  )
}
