import type { AfterChangeHook } from 'payload/dist/collections/config/types'

export const sendRegisterConfirmation: AfterChangeHook = async ({
  doc,
  req,
  req: { payload, body = {} },
  operation,
}) => {
  if (operation === 'create' && !req.user) {
    const { email, password } = body

    if (email && password) {
      await payload.sendEmail({
        to: email,
        from: 'shop@planet-of-mushrooms.com',
        subject: 'New Order',
        html:
          '<b>Hey there!</b><br/>Thank you for your order! Total amount of your order is: ' +
          doc.total +
          '. <br/> Have a nice day facker!!!',
      })
    }
  }

  return doc
}
