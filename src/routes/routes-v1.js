import express from 'express'
import transaction from './transaction'
import voucher from './voucher'

const router = express.Router()

router.use('/v1/voucher', voucher)
router.use('/v1/transaction', transaction)

export default router
