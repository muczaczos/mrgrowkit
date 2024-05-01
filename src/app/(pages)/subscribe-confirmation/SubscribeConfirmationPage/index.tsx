'use client'

import { useSearchParams } from 'next/navigation'
import React, { Fragment } from 'react'

export const SubscribeConfiramtionPage: React.FC<{}> = () => {
  const searchParams = useSearchParams()
  const firstName = searchParams.get('firstName')
  return (
    <Fragment>
      <h1 className="mb-5">Welcome in our newsletter {firstName} !</h1>
      <h2>Check out your inbox!</h2>
    </Fragment>
  )
}
