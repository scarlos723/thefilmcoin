import * as yup from 'yup'

// A valid phone have min 6 digits
const phoneRegExp = /\d{6,}/g

const paymentContactInfoFormSchema = yup.object().shape({
  email: yup.string()
    .email('Invalid email')
    .required('Required'),
  name: yup.string()
    .required('Required'),
  lastname: yup.string()
    .required('Required'),
  address: yup.string().optional(),
  phone: yup.string()
    .optional()
    .matches(
      phoneRegExp,
      {
        message: 'Invalid phone number',
        excludeEmptyString: true // Empty string is valid
      }
    ),
  refCode: yup.string().optional()
})

export default paymentContactInfoFormSchema