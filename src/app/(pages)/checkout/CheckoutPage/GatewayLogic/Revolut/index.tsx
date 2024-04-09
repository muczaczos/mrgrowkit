import { useRouter } from 'next/navigation'

import { Order } from '../../../../../../payload/payload-types'

const Revolut = async (
  method,
  totalAmount,
  fullName,
  address,
  city,
  postalCode,
  country,
  phone,
  email,
  lockerCode,
  shippingMethods,
  additionalInfo,
  cart,
) => {
  const router = useRouter()
  // console.log('1')
  const orderReq = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/orders`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      total: totalAmount,
      stripePaymentIntentID: '',
      fullname: fullName,
      streetAddress: address,
      city: city,
      postalCode: postalCode,
      country: country,
      phoneNumber: phone,
      email: email,
      lockerCode: lockerCode,
      shippingMethod: method,
      additionalInfo: additionalInfo,
      items: (cart?.items || [])?.map(({ product, quantity }) => ({
        product: typeof product === 'string' ? product : product.id,
        quantity,
        price: typeof product === 'number' ? product : Number(product.price),
      })),
    }),
  })

  const {
    error: errorFromRes,
    doc,
  }: {
    message?: string
    error?: string
    doc: Order
  } = await orderReq.json()
  router.push(`/order-confirmation-${method}?order_id=${doc.id}`)
}

export default Revolut
