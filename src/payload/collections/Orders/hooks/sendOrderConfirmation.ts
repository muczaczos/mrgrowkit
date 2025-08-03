import payload from 'payload'
import type { AfterOperationHook } from 'payload/dist/collections/config/types'
import type { Order } from '../../../payload-types'

export const sendOrderConfirmation: AfterOperationHook = async ({
  req,
  result,
  operation,
  collection,
}) => {
  console.log('HOOK AFTER OPERATION - operation:', operation, 'collection:', collection)

  // Sprawdzamy, czy to nasza kolekcja Orders
  if (collection === 'orders' && operation === 'update' && req.body?.email === true) {
    // Rzutujemy "result" na Order (typ runtime - nie da się tego inaczej zrobić)
    const order = result as Order

    try {
      await payload.sendEmail({
        to: order.email,
        from: 'shop@planet-of-mushrooms.com',
        subject: 'TEST - mail przy update',
        html: `<p>To jest testowy mail wysłany przy update dla zamówienia ${order.id}</p>`,
      })
      console.log('Mail wysłany poprawnie')
    } catch (error) {
      console.error('Błąd wysyłania maila:', error)
    }
  } else {
    console.log('Mail nie wysłany - warunki nie spełnione lub inna kolekcja')
  }

  return result
}
