import React from 'react'
import { draftMode } from 'next/headers'
import Image from 'next/image'

import { Category, Page, Product } from '../../../payload/payload-types'
import { fetchDoc } from '../../_api/fetchDoc'
import { fetchDocs } from '../../_api/fetchDocs'
import { Gutter } from '../../_components/Gutter'
import { Hero } from '../../_components/Hero'
import { HR } from '../../_components/HR'
import GrowkitsCards from './GrowkitsCards'

import classes from './index.module.scss'

const GrowKits = async () => {
  const { isEnabled: isDraftMode } = draftMode()
  let products: Product[] | null = null
  let pages = []
  let filteredPages = []

  try {
    products = await fetchDocs<Product>('products')

    for (let i = 0; i < products.length; i++) {
      pages[i] = await fetchDoc<Page>({
        collection: 'products',
        slug: products[i].slug,
        draft: isDraftMode,
      })
    }
  } catch (error) {
    // console.log(error)
  }


  return (
    <Gutter>
      <div className={classes.imageTitle}>
        <Image alt="Planet of mushrooms" src="/media/growkit.jpeg" height="500" width="600" />
        <h2 className={classes.title}>
          Start Your Mushroom Journey: Beginner-Friendly Cubensis Grow Kits 🍄 🍄 🍄
        </h2>
      </div>
      <p className={classes.heroText}>
        Embark on a captivating journey into the world 🌎 of fungi with our premium Cubensis Grow
        Kits, designed to bring the magic of mushroom cultivation to your fingertips. Elevate your
        gardening experience and unlock the satisfaction of growing your own fresh, organic
        mushrooms right at home. Join countless enthusiasts 👩🏿‍🤝‍👩🏾👩🏼‍🤝‍🧑🏼👩🏿‍🤝‍🧑🏾 who have discovered
        the joy and rewards of cultivating their own delicious harvest – start your mushroom
        adventure today! 💪 🍄
      </p>
      <div className={classes.gap}></div>
      <GrowkitsCards pages={filteredPages} products={products} />
      <HR />
    </Gutter>
  )
}

export default GrowKits
