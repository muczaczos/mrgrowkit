import type { AfterChangeHook } from 'payload/dist/collections/config/types'

import type { Order } from '../../../payload-types'

export const sendOrderConfirmation: AfterChangeHook<Order> = async ({ req }) => {
  const { payload } = req

  await payload.sendEmail({
    to: 'muczaczos@gmail.com',
    from: 'shop@planet-of-mushrooms.com',
    subject: 'New Order',
    html: '<b>Hey there!</b><br/>Thank you for your order!',
  })

  return
}
