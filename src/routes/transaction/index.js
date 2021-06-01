import multer from 'multer'
import express from 'express'
import { fileInputValidation } from 'src/middlewares'
import transactionController from 'src/controllers/transaction'
// import validations from './validations'

const upload = multer({ dest: 'public/tmp/uploads/' })
const router = express.Router()

router.route('/')
  .get(
    transactionController.read
  )
router.route('/purchase')
  .post(
    upload.single('file'),
    // inputValidation(validations.create),
    fileInputValidation('file'),
    transactionController.purchase
  )

export default router
