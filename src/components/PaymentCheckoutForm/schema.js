import * as yup from 'yup'

const getPaymentCheckoutSchema = ({ currency }) => yup.object().shape({
  tokenAmount: yup.string()
    .matches(
      /[0-9]+/gi,
      'Enter number only'
    )
    .test(
      'below-min',
      `The minimum number of tokens to buy is ${currency.minTokens} (${currency.prefix}${currency.min} ${currency.name})`,
      (value, context) => Number.parseInt(value) >= currency.minTokens
    )
    .required('Required')
})

export default getPaymentCheckoutSchema
