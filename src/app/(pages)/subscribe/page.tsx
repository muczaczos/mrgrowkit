import React, { Suspense } from 'react'
import { Metadata } from 'next'

import { Gutter } from '../../_components/Gutter'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import { SubscribePage } from './SubscribePage'

import classes from './index.module.scss'

export default async function Subscribe() {
  return (
    <Gutter>
      <Suspense fallback={<div>Loading...</div>}>
        <SubscribePage />
      </Suspense>
    </Gutter>
  )
}

export const metadata: Metadata = {
  title: 'Subscribe to our newsletter',
  description: 'By providing your email address, you agree to receive periodic updates, promotions, and information related to mushroom cultivation, spore microscopy, and exclusive offers.',
  openGraph: mergeOpenGraph({
    title: 'Subscribe to our newsletter',
    url: '/subscribe',
  }),
}
