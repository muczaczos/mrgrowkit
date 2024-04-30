'use client'

import React, { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import { Button } from '../../../_components/Button'

import classes from './index.module.scss'

export const SubscribePage: React.FC<{}> = () => {
  const searchParams = useSearchParams()
  const email = searchParams.get('email')
  const error = searchParams.get('error')
  const handleSubscriber = async () => {
    console.log(email)
  }
  return (
    <Fragment>
      <h1 className="mb-5">Subscribe to our newsletter!</h1>
      <p className="text-xl text-left mb-5">
        By providing your email address: {email}, you agree to receive periodic updates, promotions, 
        and information related to mushroom cultivation, spore microscopy, and exclusive offers. 
        Your email address will only be used for the purpose of sending our newsletter and will 
        not be shared with any third parties. You can unsubscribe at any time. For more information, 
        please refer to our Privacy Policy.
      </p>
      <Button
                label="Subscribe"
                onClick={handleSubscriber}
                className={classes.newsButton}
      ></Button>
    </Fragment>
  )
}
