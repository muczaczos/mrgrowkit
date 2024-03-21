import React from 'react'
import { draftMode } from 'next/headers'
import payload from 'payload'

import { Category, Page, Product } from '../../../payload/payload-types'
import { fetchDoc } from '../../_api/fetchDoc'
import { fetchDocs } from '../../_api/fetchDocs'
import { Blocks } from '../../_components/Blocks'
import { Gutter } from '../../_components/Gutter'
import { HR } from '../../_components/HR'
import Filters from './Filters'

import classes from './index.module.scss'
import GrowkitsCards from './GrowkitsCards'

const GrowKits = async () => {
  const { isEnabled: isDraftMode } = draftMode()
  let page: Page | null = null //Page for layout
  let categories: Category[] | null = null //I need this for filters
  let products: Product[] | null = null
  let pages = []
  let growkitProducts = []

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
  let filteredPages = pages.filter((page) => {
    return page.categories[0].slug === 'grow-kits'
  });
  filteredPages.map((element, index) => {
    console.log(element.meta.description)
  })
  return (
    <Gutter>
        <GrowkitsCards pages={filteredPages} products={products} />
      <HR />
    </Gutter>
  )
}

export default GrowKits
