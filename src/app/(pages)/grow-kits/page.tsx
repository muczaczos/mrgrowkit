import React from 'react'
import { draftMode } from 'next/headers'

import { Category, Page, Product } from '../../../payload/payload-types'
import { fetchDoc } from '../../_api/fetchDoc'
import { fetchDocs } from '../../_api/fetchDocs'
import { Gutter } from '../../_components/Gutter'
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
  filteredPages = pages.filter(page => {
    return page.categories[0].slug === 'grow-kits'
  })

  return (
    <Gutter>
      <GrowkitsCards pages={filteredPages} products={products} />
      <HR />
    </Gutter>
  )
}

export default GrowKits
