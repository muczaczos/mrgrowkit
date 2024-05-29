import type { AfterChangeHook } from 'payload/dist/collections/config/types'

import type { Order } from '../../../payload-types'

export const sendOrderConfirmation: AfterChangeHook<Order> = async ({ req, doc }) => {
  const { payload } = req
  let text = ''
  if (doc.paymentMethod === 'revolut') {
    text = `The details for the transfer are as follows:<br/>
    Account number in IBAN format:<br/>
    PL12 1212 1212 1212 1212 1212 1212<br/>
    Company name:<br/>
    UiTeH<br/>
    Address:<br/>
    Szkolna 1/3, 05-500 Piaseczno, Poland<br/>`
  }

  await payload.sendEmail({
    to: doc.email,
    from: 'shop@planet-of-mushrooms.com',
    subject: 'New Order',
    html:
      '<b>Hey there!</b><br/>Thank you for your order. Total Amount of your order is: ' +
      doc.total +
      '.' +
      '<br/>' +
      'Your payment methof is: ' +
      doc.paymentMethod +
      '<br/>' +
      '<p>' +
      text +
      '</p>',
  })

  return
}
