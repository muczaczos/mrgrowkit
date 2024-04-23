import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import classes from './index.module.scss'

const GrowkitsCards = ({ pages, products }) => {
  return (
    <section className="mt-10 flex gap-2 flex-wrap justify-center lg:justify-between">
      {pages.map((item, index) => {
        if (item !== null) {
          if (!item) return null
          const src = '/media/' + item.meta.image.filename
          const href = process.env.NEXT_PUBLIC_SERVER_URL + '/products/' + products[index].slug
          const title = item.title
          const description = item.meta.description
          const price = item.price
          return (
            <div className="">
              <Link className="" href={href}>
                <div className="">
                  <Image className="" alt="Cubensis grow kit" src={src} width="300" height="180" />
                </div>
              </Link>
              <Link className={classes.link} href={href}>
                <div className={classes.priceTitle}>
                  <h6 className={classes.title}>{title}</h6>
                  <p>€{price}</p>
                </div>
              </Link>
            </div>
          )
        }
        return null
      })}
    </section>
  )
}

export default GrowkitsCards
