import {
  transaction
} from '../../models'
import moment from 'moment'
const { Op } = require('sequelize')

const getList = async (payload = {}) => {
  const filter = {}
  const data = await transaction.findAndCountAll({
    where: filter,
    offset: payload.start,
    limit: payload.end,
    order: [[payload.sort, payload.dir]]
  })
  return ({ result: data.rows, count: data.count })
}

const checkLastTrx = async (payload = []) => {
  const data = await transaction.count({
    where: {
      customer_id: payload.id,
      created_at: {
        [Op.gte]: moment().subtract(30, 'days').format('YYYY-MM-DD HH:MM:ss')
      }
    }
  })
  return ({ count: data })
}

const countTotalTrx = async (payload = []) => {
  const data = await transaction.sum('total_spent', {
    where: {
      customer_id: payload.id,
      total_spent: {
        [Op.gte]: 100 // payload
      }
    }
  })
  return ({ count: data })
}
const checkVoucherIsUsed = async (payload = []) => {
  const data = await transaction.count({
    where: {
      customer_id: payload.id,
      voucher_id: {
        [Op.ne]: null // payload
      }
    }
  })
  return ({ count: data })
}

const purchaseProses = async (payload = []) => {
  const data = await transaction.create(payload)
  return data
}

export default {
  getList,
  checkLastTrx,
  countTotalTrx,
  checkVoucherIsUsed,
  purchaseProses
}
