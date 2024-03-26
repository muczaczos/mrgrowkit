import React from 'react'
import { draftMode } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'

import { Category, Page, Post, Zone } from '../../../payload/payload-types'
import { fetchDoc } from '../../_api/fetchDoc'
import { fetchDocs } from '../../_api/fetchDocs'
import { Blocks } from '../../_components/Blocks'
import Categories from '../../_components/Categories'
import { Gutter } from '../../_components/Gutter'
import { Hero } from '../../_components/Hero'
import { HR } from '../../_components/HR'
import PostsCards from './PostsCards'

import classes from './index.module.scss'

function removeDash(code) {
  return code.replace('-', '')
}

function calculateShippingCost(data, postalCode, weight, countryCode) {
  // Iterating through each object in the data array
  for (const zone of data) {
    // Checking if the countryCode is in the selectedCountries array
    if (zone.selectedCountries.includes(countryCode)) {
      // Checking if the postalCode matches any code in the codes array
      for (const codeObj of zone.codes) {
        if (codeObj.code === postalCode) {
          // Checking if weight is within the range and finding the appropriate price
          for (const range of zone.ranges) {
            const rangeWeight = parseFloat(range.weigth)
            if (
              (weight <= 1 && rangeWeight === 1) ||
              (weight > 1 && weight < 3 && rangeWeight === 3)
            ) {
              return range.price
            }
          }
        }
      }

      // Checking if the postalCode falls within any codesRanges
      for (const rangeObj of zone.codesRanges) {
        const from = parseInt(rangeObj.from)
        const to = parseInt(rangeObj.to)
        const code = parseInt(postalCode)
        if (code >= from && code <= to) {
          // Finding the appropriate price for the weight
          for (const range of zone.ranges) {
            const rangeWeight = parseFloat(range.weigth)
            if (
              (weight <= 1 && rangeWeight === 1) ||
              (weight > 1 && weight < 3 && rangeWeight === 3)
            ) {
              return range.price
            }
          }
        }
      }

      // If codes is not in 'special zones'
      if (zone.codes.length == 0 && zone.codesRanges.length == 0) {
        // Checking if weight is within the range and finding the appropriate price
        for (const range of zone.ranges) {
          const rangeWeight = parseFloat(range.weigth)
          if (
            (weight <= 1 && rangeWeight === 1) ||
            (weight > 1 && weight < 3 && rangeWeight === 3)
          ) {
            return range.price
          }
        }
      }
    }
  }

  // If no matching zone found, return null
  return null
}

const Posts = async () => {
  const { isEnabled: isDraftMode } = draftMode()
  let page: Page | null = null //Page for layout
  let pageZones: Page | null = null //Page for layout
  let posts: Post[] | null = null
  let zones: Zone[] | null = null

  let pages = []
  try {
    //fetch page and categories
    //1 fetch page with slug 'posts'
    page = await fetchDoc<Page>({
      collection: 'pages',
      slug: 'posts',
      draft: isDraftMode,
      /*drafts allow you to build on top of versions functionality
        to make changes to your collection, documents and globals but
        publish only when you're ready. It allows you to check out
        how something is currently working. 
      */
    })
    posts = await fetchDocs<Post>('posts')
    //   console.log('dupa')
    zones = await fetchDocs<Zone>('zones')
    if (Object.keys(zones[0].codesRanges).length === 0) {
      //console.log(zones)
    }
    //console.log(zones[0].ranges)

    const postalCode = '1212'
    const weight = 1
    const countryCode = 'IT'

    const shippingCost = calculateShippingCost(zones, removeDash(postalCode), weight, countryCode)
    //console.log('Shipping cost:', shippingCost)

    //console.log(zones[0])

    for (let i = 0; i < posts.length; i++) {
      pages[i] = await fetchDoc<Page>({
        collection: 'posts',
        slug: posts[i].slug,
        draft: isDraftMode,
      })
    }
  } catch (error) {}

  const { hero, layout } = page

  return (
    <Gutter>
      <div className={classes.imageTitle}>
        <Image alt="Planet of mushrooms" src="/media/earth-1.jpg" height="500" width="500" />
        <h2 className={classes.title}>Nice to see you on our blog... 🙋‍♂️</h2>
      </div>
      <p className={classes.heroText}>
        You can find here many informations about mushrooms and their cultivating. Master the art of
        mushrooms cultivation for a bountiful harvest. 🍄 Change your planet to
        planet-of-mushrooms.com 🌎
      </p>
      <div className={classes.gap}></div>
      <PostsCards posts={posts} pages={pages} />
      <HR />
    </Gutter>
  )
}

export default Posts
