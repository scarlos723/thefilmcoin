import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import {
  Button,
  Container,
  Error,
  Form,
  Input,
  Label,
  Section,
  Title
} from './styles'

import PaymentPopup from '@/components/PaymentPopup'
import { sendContactInfo } from '@/services/Api'
import paymentContactInfoFormSchema from './schema'

function PaymentContactInfoForm() {
  const navigate = useNavigate()
  const location = useLocation()
  const [cookies, setCookie] = useCookies(['refCode'])
  const params = new URLSearchParams(location.search)
  const [refCode, setRefCode] = useState('')
  const [response, setResponse] = useState({})

  useEffect(() => {
    const code = params.get('refCode')
    if (code) {
      setCookie(
        'refCode',
        code,
        {
          path: '/',
          maxAge: 60 * 60 * 24 * 30 // 30 days
        }
      )
      setRefCode(code)
    } else {
      cookies.refCode && setRefCode(cookies.refCode)
    }
  }, [])

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    mode: 'all',
    resolver: yupResolver(paymentContactInfoFormSchema)
  })

  const onSubmitHandler = async (data) => {
    try {
      const allData = {
        ...data,
        refCode: !refCode ? 'null' : refCode
      }
      const response = await sendContactInfo(allData)
      setResponse(response)

      if (allData.refCode) {
        // eslint-disable-next-line no-undef
        EF.click({
          coupon_code: allData.refCode
        }).then(response => {
          localStorage.setItem('transaction_id', response)
        })
      }
      reset()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {response.msg === 'ok' && <PaymentPopup token={response.token} />}
      <Section>
        <Container>
          <Form onSubmit={handleSubmit(onSubmitHandler)} noValidate>
            <Title>Contact Information</Title>
            <div>
              <Label htmlFor='email' required>Contact Mail</Label>
              <Input
                type='email'
                placeholder='Enter email address'
                {...register('email')}
              />
              {errors.email && <Error>{errors.email.message}</Error>}
            </div>

            <div>
              <Label htmlFor='name' required>Name</Label>
              <Input
                type='text'
                placeholder='Enter name'
                {...register('name')}
              />
              {errors.name && <Error>{errors.name.message}</Error>}
            </div>

            <div>
              <Label htmlFor='lastname' required>Last Name</Label>
              <Input
                type='text'
                {...register('lastname')}
              />
              {errors.lastname && <Error>{errors.lastname.message}</Error>}
            </div>

            <div>
              <Label htmlFor='address'>Address</Label>
              <Input
                type='text'
                placeholder='Enter address'
                {...register('address')}
              />
            </div>

            <div>
              <Label htmlFor='phone'>Phone Number</Label>
              <Input
                type='tel'
                {...register('phone')}
              />
              {errors.phone && <Error>{errors.phone.message}</Error>}
            </div>

            <Input type='hidden' {...register('phone')} value={refCode} />

            <div>
              <Button type='submit'>
                Continue to payment
              </Button>
              <Button
                variant='secondary'
                onClick={() => navigate('/')}
              >
                Cancel
              </Button>
            </div>
          </Form>
        </Container>
      </Section>
    </>
  )
}

export default PaymentContactInfoForm