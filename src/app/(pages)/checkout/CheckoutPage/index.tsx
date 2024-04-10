'use client'
import React, { Fragment, useContext, useEffect } from 'react'
import countryList from 'react-select-country-list'
import axios from 'axios'
import { sha1 } from 'js-sha1'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { Order, Settings } from '../../../../payload/payload-types'
import { fetchDocs } from '../../../_api/fetchDocs'
import { Button } from '../../../_components/Button'
import { LoadingShimmer } from '../../../_components/LoadingShimmer'
import { priceFromJSON } from '../../../_components/Price'
import { useAuth } from '../../../_providers/Auth'
import { CartContext, CartProvider, useCart } from '../../../_providers/Cart'
import { useTheme } from '../../../_providers/Theme'
import cssVariables from '../../../cssVariables'
import { CheckoutForm } from '../CheckoutForm'
import { CheckoutItem } from '../CheckoutItem'
import AdditionalInfo from './AdditionalInfo'
import { calculateShippingCost } from './CalculateShipping'
import GatewayLogic from './GatewayLogic'
import PaymentMethods from './PaymentMethods'
import ShippingDetails from './ShippingDetails'
import ShippingMethods from './ShippingMethods'

import classes from './index.module.scss'

export const CheckoutPage: React.FC<{
  settings: Settings
}> = props => {
  const {
    settings: { productsPage },
  } = props

  const { user } = useAuth()
  const router = useRouter()
  const [error, setError] = React.useState<string | null>(null)
  const [clientSecret, setClientSecret] = React.useState()
  const hasMadePaymentIntent = React.useRef(false)
  const { theme } = useTheme()

  const [fullName, setFullName] = React.useState('')
  const [address, setAddress] = React.useState('')
  const [city, setCity] = React.useState('')
  const [postalCode, setPostalCode] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [country, setCountry] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [method, setMethod] = React.useState()
  const [lockerCode, setLockerCode] = React.useState()
  const [showDisplayCode, setShowDisplayCode] = React.useState()
  const [shippingMethods, setShippingMethods] = React.useState()
  const [shippingCost, setShippingCost] = React.useState(0)
  const [additionalInfo, setAdditionalInfo] = React.useState()
  const { cart, cartIsEmpty, cartTotal, totalAmount, totalWeight } = useCart()
  var subtotal = 0
  let total: number | undefined

  useEffect(() => {
    if (user !== null && cartIsEmpty) {
      router.push('/cart')
    }
  }, [router, user, cartIsEmpty])

  // calculateShippingCost('1212', '1', 'NL')
  useEffect(() => {
    // Tutaj możesz wykorzystać totalWeight i cart, np.
    //  console.log('test');
    //  console.log(totalWeight);

    // Sprawdź, czy postalCode nie jest null, aby uniknąć wywołania funkcji calculateShippingCost z niezainicjalizowaną wartością
    if (postalCode) {
      const fetchData = async () => {
        //   console.log(country)
        const cost = await calculateShippingCost(postalCode, totalWeight, country)
        setShippingCost(cost)
      }
      fetchData()
    }
  }, [postalCode, totalWeight, country, totalAmount])

  total = Number(totalAmount) + Number(shippingCost)

  //if (!user || !stripe) return null
  return (
    <Fragment>
      {!cartIsEmpty && (
        <>
          <div className={classes.sections}>
            {user ? ( // Sprawdzanie czy użytkownik jest zalogowany
              <ShippingDetails
                setFullName={setFullName}
                setAddress={setAddress}
                setCity={setCity}
                setPostalCode={setPostalCode}
                setCountry={setCountry}
                setPhone={setPhone}
                setEmail={setEmail}
                defaultFullName={user.name}
                defaultAddress={user.streetAddress}
                defaultCity={user.city} // Ustawienie wartości domyślnej na podstawie user.city, jeśli użytkownik jest zalogowany
                defaultCountry={user.country}
                defaultPostalCode={user.postalCode}
                defaultEmail={user.email}
                defaultPhone={user.phoneNumber}
              />
            ) : (
              <ShippingDetails
                setFullName={setFullName}
                setAddress={setAddress}
                setCity={setCity}
                setPostalCode={setPostalCode}
                setCountry={setCountry}
                setPhone={setPhone}
                setEmail={setEmail}
              />
            )}
            <PaymentMethods method={method} setMethod={setMethod} />
          </div>
          <ShippingMethods
            setShippingMethods={setShippingMethods}
            setLockerCode={setLockerCode}
            setShowDisplayCode={setShowDisplayCode}
          />
          {showDisplayCode && (
            <h3 className={classes.showCode}>Wybrany paczkomat to: {lockerCode}</h3>
          )}
          <AdditionalInfo setAdditionalInfo={setAdditionalInfo} />
        </>
      )}
      {cartIsEmpty && (
        <div>
          {'Your '}
          <Link href="/cart">cart</Link>
          {' is empty.'}
          {typeof productsPage === 'object' && productsPage?.slug && (
            <Fragment>
              {' '}
              <Link href={`/${productsPage.slug}`}>Continue shopping?</Link>
            </Fragment>
          )}
        </div>
      )}
      {!cartIsEmpty && (
        <div className={classes.items}>
          <div className={classes.header}>
            <p>Products</p>
            <div className={classes.headerItemDetails}>
              <p></p>
              <p className={classes.quantity}>Quantity</p>
            </div>
            <p className={classes.subtotal}>Subtotal</p>
          </div>

          <ul>
            {cart?.items?.map((item, index) => {
              if (typeof item.product === 'object') {
                const {
                  quantity,
                  product,
                  product: { price, title, meta },
                } = item
                subtotal = Number(price) * quantity
                if (!quantity) return null

                const metaImage = meta?.image

                return (
                  <Fragment key={index}>
                    <CheckoutItem
                      product={product}
                      title={title}
                      metaImage={metaImage}
                      quantity={quantity}
                      index={index}
                      price={price}
                      subtotal={subtotal}
                    />
                  </Fragment>
                )
              }
              return null
            })}
            <div className={classes.orderTotal}>
              <p>Shippingn Cost</p>
              <p>{shippingCost}</p>
            </div>
            <div className={classes.orderTotal}>
              <p>Order Total</p>
              <p>{total}</p>
            </div>
          </ul>
        </div>
      )}
      <div className={classes.buttons}>
        <Button label="Back to cart" href="/cart" appearance="secondary" />
        <GatewayLogic
          method={method}
          totalAmount={total}
          fullName={fullName}
          address={address}
          city={city}
          postalCode={postalCode}
          country={country}
          phone={phone}
          email={email}
          lockerCode={lockerCode}
          additionalInfo={additionalInfo}
          cart={cart}
        />
      </div>
    </Fragment>
  )
}
