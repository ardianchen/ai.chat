import status from 'http-status'
import { generateRandomString } from '../../lib/utility'
import r from '../../lib/resjson'
import redis from 'redis'

const client = redis.createClient()

client.on('error', function (error) {
  console.error(error)
})

/**
 *
 * @param {*} req
 * @param {*} res
 */
const generate = async (req, res) => {
  const arr = []
  for (let index = 0; index < req.body.total_voucher; index++) {
    // client.hset('voucher', { voucherId: generateRandomString(5), status: 'notUsed' })
    arr.push({ voucherId: await generateRandomString(6), status: 'notUsed' })
  }
  client.set('vouchers', JSON.stringify(arr))
  // const data = await transactionSrv.read({ params: params, query: query, user: user })
  client.get('vouchers', function (err, obj) {
    if (err) {
      const response = r(40, 'fail', {})
      res.status(status[403]).json(response)
    }
    const response = r(21, 'success', JSON.parse(obj))
    res.status(status.CREATED).json(response)
  })
}

export default {
  generate
}
