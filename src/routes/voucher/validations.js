import Validator from 'validatorjs'

const generate = ({ body }) => {
  const rules = {
    total_voucher: 'required'
  }
  return new Validator(body, rules)
}

export default {
  generate
}
