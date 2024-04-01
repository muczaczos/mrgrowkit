import React, { Fragment } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { FaRegUser, FaIdBadge, FaCreditCard, FaClipboardList} from "react-icons/fa";
import { BiDoorOpen } from "react-icons/bi";

import { Order } from '../../../payload/payload-types'
import { Button } from '../../_components/Button'
import { Gutter } from '../../_components/Gutter'
import { HR } from '../../_components/HR'
import { RenderParams } from '../../_components/RenderParams'
import { LowImpactHero } from '../../_heros/LowImpact'
import { getMeUser } from '../../_utilities/getMeUser'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import notFound from '../not-found'
import AccountForm from './AccountForm'
import OrdersList from './OrdersList'

import classes from './index.module.scss'

export default async function Account() {
  const { user } = await getMeUser({
    nullUserRedirect: `/login?error=${encodeURIComponent(
      'You must be logged in to access your account.',
    )}&redirect=${encodeURIComponent('/account')}`,
  })

  const { token } = await getMeUser({
    nullUserRedirect: `/login?error=${encodeURIComponent(
      'You must be logged in to view your orders.',
    )}&redirect=${encodeURIComponent('/orders')}`,
  })

  let orders: Order[] | null = null

  try {
    orders = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/orders`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${token}`,
      },
      cache: 'no-store',
    })
      ?.then(async res => {
        if (!res.ok) notFound()
        const json = await res.json()
        if ('error' in json && json.error) notFound()
        if ('errors' in json && json.errors) notFound()
        return json
      })
      ?.then(json => json.docs)
  } catch (error) {
    // when deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // so swallow the error here and simply render the page with fallback data where necessary
    // in production you may want to redirect to a 404  page or at least log the error somewhere
    // console.error(error)
  }
  // console.log(orders)
  return (
    <Fragment>
      <Gutter>
        <h1 className={classes.title}>My Profile</h1>
        <div className={classes.layout}>
          <div className={classes.menu}>
            <ul className={classes.menuList}>
              <li className={classes.avatar}>
                <FaIdBadge className={classes.avatarUser} />
                <div className={classes.avatarText}>
                  <p className={classes.avatarName}><strong>{user.name}</strong></p>
                  <p className={classes.avatarEmail}>{user.email}</p>
                </div>
              </li>
              <li className={classes.menuItem}><FaRegUser />Personal Information</li>
              <li className={classes.menuItem}><FaCreditCard />My Pucharses</li>
              <li className={classes.menuItem}><FaClipboardList />My Orders</li>
              <li className={classes.menuItem + ' ' + classes.menuLogout}><BiDoorOpen />Logout</li>
            </ul>
          </div>
          <div className={classes.orders}>
            <h5 className={classes.ordersTitle}>My orders</h5>
            <OrdersList orders={orders} />
          </div>
        </div>
      </Gutter>

      <Gutter>
        <RenderParams className={classes.params} />
      </Gutter>
      <LowImpactHero
        type="lowImpact"
        media={null}
        richText={[
          {
            type: 'h1',
            children: [
              {
                text: 'Account',
              },
            ],
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'This is your account dashboard. Here you can update your account information, view your purchased products, and browse your order history. To manage all users, ',
              },
              {
                type: 'link',
                url: '/admin/collections/users',
                children: [
                  {
                    text: 'login to the admin dashboard.',
                  },
                ],
              },
            ],
          },
        ]}
      />
      <Gutter className={classes.account}>
        <AccountForm />
        <HR />
        <h2>Purchased Products</h2>
        <p>
          These are the products you have purchased over time. This provides a way for you to access
          digital assets or gated content behind a paywall. This is different from your orders,
          which are directly associated with individual payments.
        </p>
        <div>
          {user?.purchases?.length || 0 > 0 ? (
            <ul className={classes.purchases}>
              {user?.purchases?.map((purchase, index) => {
                return (
                  <li key={index} className={classes.purchase}>
                    {typeof purchase === 'string' ? (
                      <p>{purchase}</p>
                    ) : (
                      <h4>
                        <Link href={`/products/${purchase.slug}`}>{purchase.title}</Link>
                      </h4>
                    )}
                  </li>
                )
              })}
            </ul>
          ) : (
            <div className={classes.noPurchases}>You have no purchases.</div>
          )}
        </div>
        <HR />
        <h2>Orders</h2>
        <p>
          These are the orders you have placed over time. Each order is associated with an payment
          intent. As you order products, they will appear in your "purchased products" list.
        </p>
        <Button
          className={classes.ordersButton}
          href="/orders"
          appearance="primary"
          label="View orders"
        />
        <HR />
        <Button href="/logout" appearance="secondary" label="Log out" />
      </Gutter>
    </Fragment>
  )
}

export const metadata: Metadata = {
  title: 'Account',
  description: 'Create an account or log in to your existing account.',
  openGraph: mergeOpenGraph({
    title: 'Account',
    url: '/account',
  }),
}
