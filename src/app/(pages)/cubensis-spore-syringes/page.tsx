import React from 'react'
import { draftMode } from 'next/headers'
import Image from 'next/image'

import { Category, Page, Product } from '../../../payload/payload-types'
import { fetchDoc } from '../../_api/fetchDoc'
import { fetchDocs } from '../../_api/fetchDocs'
import { Gutter } from '../../_components/Gutter'
import { Hero } from '../../_components/Hero'
import { HR } from '../../_components/HR'
import SyringesCards from './SyringesCards'

import classes from './index.module.scss'

const CubensisSporeSyringes = async () => {
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
    //console.log(error)
  }

  filteredPages = pages.filter(page => {
    if (page.categories[0]) {
      return page.categories[0].slug === 'cubensis-spore-syringes'
    }
  })

  return (
    <Gutter>
      <div className={classes.imageTitle}>
        <Image alt="Planet of mushrooms" src="/media/syringe.jpg" height="500" width="600" />
        <h2 className={classes.title}>
          Cubensis Spore Syringes: Premium Cultivation Essentials 💉💉💉
        </h2>
      </div>
      <p className={classes.heroText}>
        Discover our premium range of Cubensis Spore Syringes, meticulously crafted for superior
        mushroom cultivation 🍄. With carefully selected strains and rigorous preparation 👨🏻‍⚕️, our
        syringes guarantee optimal mycelium growth and abundant yields. Whether you're a novice or a
        seasoned cultivator, our syringes offer the perfect blend of convenience and reliability for
        your mushroom growing journey.🛸
      </p>
      <div className={classes.gap}></div>
      <SyringesCards pages={filteredPages} products={products} />
      <HR />
    </Gutter>
  )
}

export default CubensisSporeSyringes
