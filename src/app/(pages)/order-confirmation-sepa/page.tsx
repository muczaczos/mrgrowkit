import React, { Suspense } from 'react'
import { Metadata } from 'next'

import { Gutter } from '../../_components/Gutter'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import { OrderConfirmationPage } from './OrderConfirmationPage'

import classes from './index.module.scss'

export default async function OrderConfirmationSepa() {
  return (
    <Gutter>
      <Suspense fallback={<div>Loading...</div>}>
        <OrderConfirmationPage />
      </Suspense>
    </Gutter>
  )
}

export const metadata: Metadata = {
  title: 'Order Confirmation - Sepa',
  description: 'Your order has been confirmed. Your payment method is bank transfer',
  openGraph: mergeOpenGraph({
    title: 'Order Confirmation - Sepa',
    url: '/order-confirmation-sepa',
  }),
}
