import React from 'react'
import { BsBank, BsCreditCard2Back, BsCurrencyBitcoin } from 'react-icons/bs'

import { RadioButton } from '../../../../_components/Radio'

import classes from './index.module.scss'

const PaymentMethods = ({ method, setMethod }) => {
  const handlePaymentMethod = (value: string) => {
    setMethod(value)
  }

  return (
    <div className={classes.paymentSection}>
      <h3 className={classes.payment}>Payment Methods</h3>
      <div className={classes.radioAndIcon}>
        <RadioButton
          label="Bank Trafser"
          value="transfer"
          isSelected={method === 'transfer'}
          onRadioChange={handlePaymentMethod}
          groupName="method"
        />
        <BsBank className={classes.icon} />
      </div>
      <hr className={classes.hr}></hr>
      <div className={classes.radioAndIcon}>
        <RadioButton
          label="Payment Gateway"
          value="gateway"
          isSelected={method === 'gateway'}
          onRadioChange={handlePaymentMethod}
          groupName="method"
        />
        <BsCreditCard2Back className={classes.icon} />
      </div>
      <hr className={classes.hr}></hr>
      <div className={classes.radioAndIcon}>
        <RadioButton
          label="Cryptocurrency ETH"
          value="eth"
          isSelected={method === 'eth'}
          onRadioChange={handlePaymentMethod}
          groupName="method"
        />
        <BsCurrencyBitcoin className={classes.icon} />
      </div>
      <hr className={classes.hr}></hr>
    </div>
  )
}

export default PaymentMethods
