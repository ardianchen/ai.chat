import Validator from 'validatorjs'

const create = ({ body }) => {
  const rules = {
    member_code: 'required'
  }
  return new Validator(body, rules)
}

const read = ({ query }) => {
  const rules = {
    member_code: 'required'
  }
  return new Validator(query, rules)
}

export default {
  create,
  read
}
