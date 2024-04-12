import React from 'react'
import axios from 'axios'
import crypto from 'crypto'
import { useRouter } from 'next/navigation'

import { Order } from '../../../../../payload/payload-types'
import { Button } from '../../../../_components/Button'

const GatewayLogic = ({
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
  additionalInfo,
  cart,
}) => {
  const router = useRouter()

  const handleSubmit = async () => {
    //console.log('dupa')
    if (method === 'gateway') {
      try {
        const data = {
          title: 'dupa',
          amount: {
            value: 100,
            currencyCode: 'PLN',
          },
          sign: '6e15693d71f99cd0c4cd7ffa8a3e4c019a58d1d9',
        }

        const response = await axios.post(
          'https://pay.cashbill.pl/testws/rest/payment/grzybole.pl',
          data,
        )

        console.log('Response:', response.data)
      } catch (error) {
        console.error('Error:', error.message)
      }
    } else if (method === 'revolut') {
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
      router.push(`/order-confirmation-revolut?order_id=${doc.id}`)
    } else if (method === 'crypto') {
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
      router.push(`/order-confirmation-crypto?order_id=${doc.id}`)
    } else if (method === 'wise') {
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
      router.push(`/order-confirmation-wise?order_id=${doc.id}`)
    } else if (method === 'sepa') {
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
      router.push(`/order-confirmation-sepa?order_id=${doc.id}`)
    }
  }

  return <Button label="Place the Order" appearance="primary" onClick={handleSubmit}></Button>
}

export default GatewayLogic
