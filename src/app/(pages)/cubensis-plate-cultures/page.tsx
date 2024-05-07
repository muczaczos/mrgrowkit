import React from 'react'
import { draftMode } from 'next/headers'
import Image from 'next/image'

import { Category, Page, Product } from '../../../payload/payload-types'
import { fetchDoc } from '../../_api/fetchDoc'
import { fetchDocs } from '../../_api/fetchDocs'
import { Gutter } from '../../_components/Gutter'
import { Hero } from '../../_components/Hero'
import { HR } from '../../_components/HR'
import PlatesCards from './PlatesCards'

import classes from './index.module.scss'

const CubensisPlatesCultures = async () => {
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
      return page.categories[0].slug === 'plate-cultures'
    }
  })

  return (
    <Gutter>
      <div className={classes.imageTitle}>
        <Image
          alt="Syringe needle inside ampoule"
          src="/media/cultures.jpeg"
          height="500"
          width="600"
        />
        <h2 className={classes.title}>Cultivate with Precision: Cubensis Plate Cultures! 🧫🧫🧫</h2>
      </div>
      <p className="text-xl lg:pt-10">
        Enhance your mushroom cultivation endeavors with our premium Cubensis Plate Cultures 🍽️. Designed 
        to streamline the cultivation process, our petri dish cultures are meticulously prepared to 
        deliver exceptional results. Each plate contains a carefully isolated strain, ensuring purity 
        and potency for successful cultivation 💪. Elevate your growing experience with our high-quality 
        plate cultures today 🚀.
      </p>
      <div className={classes.gap}></div>
      <PlatesCards pages={filteredPages} products={products} />
      <HR />
    </Gutter>
  )
}

export default CubensisPlatesCultures
