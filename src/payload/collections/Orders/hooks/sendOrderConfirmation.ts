import type { AfterChangeHook } from 'payload/dist/collections/config/types'

import type { Order } from '../../../payload-types'

export const sendOrderConfirmation: AfterChangeHook<Order> = async ({ req, doc }) => {
  const { payload } = req

  await payload.sendEmail({
    to: doc.email,
    from: 'shop@planet-of-mushrooms.com',
    subject: 'New Order',
    html:
      '<b>Hey there!</b><br/>Thank you for your order! Total amount of your order is: ' +
      doc.total +
      '. <br/> Have a nice day facker!!!',
  })

  return
}
