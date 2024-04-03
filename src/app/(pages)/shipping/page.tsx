import React from 'react'
import { draftMode } from 'next/headers'
import Image from 'next/image'

import { Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { HR } from '../../_components/HR'

import classes from './index.module.scss'

const Shipping = async () => {
  return (
    <Gutter>
      <div className={classes.imageTitle}>
        <Image
          alt="Shipping package with mushrooms growkit"
          src="/media/shipping.svg"
          height="400"
          width="400"
          className={classes.image}
        />
        <h2 className={classes.title}>
          Shipping is the most important thing in an online store. 🍄🎁🎁🎁💪
        </h2>
      </div>
      <p className={classes.heroText}>
         We take care of your shipments from start to finish. We always send the tracking number after shipment.
         You can check shipping prices by zone on this page. If you don’t see your country on that list, please contact us.
      </p>
      <div className={classes.gap}></div>
      <HR />
    </Gutter>
  )
}

export default Shipping
