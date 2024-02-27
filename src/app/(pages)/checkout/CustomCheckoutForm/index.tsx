'use client'

import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { sha1 } from 'js-sha1'
import { useRouter } from 'next/navigation'

import { Order } from '../../../../payload/payload-types'
import { Button } from '../../../_components/Button'
import { Input } from '../../../_components/Input'
import { Message } from '../../../_components/Message'
import { priceFromJSON } from '../../../_components/Price'
import { useCart } from '../../../_providers/Cart'
import PaymentMethods from '../CheckoutPage/PaymentMethods'
import ShippingDetails from '../CheckoutPage/ShippingDetails'

import classes from './index.module.scss'

const CustomCheckoutForm: React.FC<{}> = ({}) => {
  const [error, setError] = React.useState<string | null>(null)
  //const [isLoading, setIsLoading] = React.useState(false)
  const router = useRouter()
  const { cart, cartTotal, totalAmount } = useCart()
  const {
    register,
    formState: { errors, isLoading },
  } = useForm<FormData>()

  return <></>
}

export default CustomCheckoutForm
