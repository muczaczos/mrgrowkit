import type { FieldHook } from 'payload/types'

import type { Order } from '../../../payload-types'

export const populateOrderedBy: FieldHook<Order> = async ({ req, operation, value }) => {
  if ((operation === 'create' || operation === 'update') && !value && req.user) {
    return req.user.id
  } else {
    return '65df06c6f852b1b1362a72dc'
  }

  return value
}
