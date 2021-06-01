import transactionRepo from '../../repositories/transaction/index'
import redis from 'redis'

const client = redis.createClient()

const read = async (payload) => {
  let {
    pagenum = 1,
    limit = 10,
    sort = 'created_at',
    dir = 'DESC'
  } = payload.query
  pagenum = Number(pagenum)
  const end = Number(limit)
  const start = (pagenum - 1) * end

  const result = await transactionRepo.getList({
    start: start,
    pagenum: pagenum,
    end: end,
    sort: sort,
    dir: dir,
    params: {
    }
  })
  return result
}

const purchase = async (payload) => {
  const lastTrx = await transactionRepo.checkLastTrx({ id: payload.body.id })
  const totalTrx = await transactionRepo.countTotalTrx({ id: payload.body.id })
  const voucherIsUsed = await transactionRepo.checkVoucherIsUsed({ id: payload.body.id })
  if (voucherIsUsed.count > 1) {
    return { code: 41, msg: 'you just use 1 voucher' }
  }
  if (totalTrx.count < 100) {
    return { code: 41, msg: 'your transaction must be more than $100' }
  }
  if (lastTrx.count < 3) {
    return { code: 41, msg: 'you must have 3 transaction in this month' }
  }
  let newList = []
  let listVoucher = []
  let voucher = ''
  client.get('vouchers', function (err, obj) {
    if (err) {
      return { code: 41, msg: 'voucher not found' }
    }
    listVoucher = JSON.parse(obj)
    // save voucher in trx
    newList = listVoucher.filter(val => val.status !== 'used')
    console.log(newList)
    let idx = 0
    for (idx in listVoucher) {
      if (newList[0].voucherId === listVoucher[idx].voucherId) {
        voucher = listVoucher[idx].voucherId
        listVoucher[idx].status = 'used'
      }
    }
    transactionRepo.purchaseProses({
      customer_id: payload.body.id,
      total_spent: payload.body.spent,
      total_saving: payload.body.saving,
      voucher_id: voucher
    })
    client.set('vouchers', JSON.stringify(listVoucher))
  })
}

export default {
  read,
  purchase
}
