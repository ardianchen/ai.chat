
import express from 'express'
import voucherController from 'src/controllers/voucher'
import validations from './validations'
import { inputValidation } from 'src/middlewares'

const router = express.Router()

router.route('/generate')
  .post(
    inputValidation(validations.generate),
    voucherController.generate
  )
  // .get(
  //   // inputValidation(validations.read),
  //   transactivoucherControlleronController.read
  // )

export default router
