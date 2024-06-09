import React from 'react'
import Head from 'next/head'
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

const Syringes = async () => {
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
    <>
      <Head>
        {/* 60 char */}
        <title>Cubensis Spore Syringes: Premium Cultivation Essentials</title>
        {/* 150 char */}
        <meta
          name="description"
          content="Unlock the mysteries of the fungal world with our premium Cubensis Spore Syringes. Perfect for both beginners and experienced cultivators"
        />
        <meta
          name="keywords"
          content="Cubensis spore syringe, Cubensis spore print, magic mushrooms, Cubensis spores, Fungi, Organic Mushrooms"
        />
        <meta name="author" content="www.planet-of-mushrooms" />
        <meta
          property="og:title"
          content="Cubensis Spore Syringes: Premium Cultivation Essentials"
        />
        <meta
          property="og:description"
          content="Unlock the mysteries of the fungal world with our premium Cubensis Spore Syringes. Perfect for both beginners and experienced cultivators"
        />
        <meta property="og:image" content="/media/syringes.webp" />
        <meta property="og:url" content="https://planet-of-mushrooms.com/cubensis-spore-syringes" />
        <meta property="og:type" content="website" />
      </Head>
      <Gutter>
        <div className={classes.imageTitle}>
          <Image alt="Planet of mushrooms" src="/media/growkit.jpeg" height="500" width="600" />
          <h2 className={classes.title}>
            Cubensis Spore Syringes: Premium Cultivation Essentials 💉💉💉
          </h2>
        </div>
        <p className={classes.heroText}>
          Unlock the mysteries of the fungal world with our premium Cubensis Spore Syringes. Perfect
          for both beginners and experienced cultivators, these syringes contain high-quality,
          viable spores ready to kickstart your mushroom-growing adventure. Experience the joy and
          satisfaction of cultivating your own organic mushrooms at home. Join a vibrant community
          of enthusiasts and discover the rewards of growing your own harvest. Begin your
          fascinating journey into mycology today! 🌍🍄
        </p>
        <div className={classes.gap}></div>
        <SyringesCards pages={filteredPages} products={products} />
        <HR />
      </Gutter>
    </>
  )
}

export default Syringes
