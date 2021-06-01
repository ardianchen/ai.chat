import status from 'http-status'
import transactionSrv from '../../services/transaction'
import r from '../../lib/resjson'

/**
 * Get transaction.
 * @property {number} req.query.skip - Number of approvedTransactions to be skipped.
 * @property {number} req.query.limit - Limit number of approvedTransactions to be returned.
 * @returns {transactionSrv[]}
 */

const read = async (req, res) => {
  const { params, query, user } = req
  const data = await transactionSrv.read({ params: params, query: query, user: user })
  const response = r(21, 'success', data)
  res.status(status.CREATED).json(response)
}

/**
 * post transaction.
 * @property {number} req.body.saving - Number of approvedTransactions to be skipped.
 * @property {number} req.body.spent - Limit number of approvedTransactions to be returned.
 * @property {number} req.body.file - ObjectId of user.
 * @returns {transactionSrv[]}
 */

const purchase = async (req, res) => {
  const { file, body } = req
  const data = await transactionSrv.purchase({ body: body, file: file })
  const response = r(21, 'success', data)
  res.status(status.CREATED).json(response)
}

export default {
  read,
  purchase
}
