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
      //console.log('1')

      const https = require('follow-redirects').https

      let options = {
        method: 'POST',
        hostname: 'pay.cashbill.pl',
        path: '/testws/rest/payment/grzybole.pl',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        maxRedirects: 20,
      }

      const req = https.request(options, res => {
        let chunks = []

        res.on('data', chunk => {
          chunks.push(chunk)
        })

        res.on('end', chunk => {
          let body = Buffer.concat(chunks)
          //   console.log(body.toString())
        })

        res.on('error', error => {
          //  console.error(error)
        })
      })

      let postData = JSON.stringify({
        title: 'string',
        sign: 'string',
      })

      const dataObj = JSON.parse(postData)

      // Utwórz obiekt skrótu MD5
      const md5 = crypto.createHash('md5')

      // Dodaj dane do obiektu skrótu
      md5.update(dataObj.title + '04f58ee93d486f0b426c09d776e1f540')

      const hash = md5.digest('hex')

      //  console.log(hash)

      dataObj.sign = hash

      req.write(postData)

      req.end()
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
