import React from 'react'
import { draftMode } from 'next/headers'

import { Category, Page, Post } from '../../../payload/payload-types'
import { fetchDoc } from '../../_api/fetchDoc'
import { fetchDocs } from '../../_api/fetchDocs'
import { Blocks } from '../../_components/Blocks'
import Categories from '../../_components/Categories'
import { Gutter } from '../../_components/Gutter'
import { Hero } from '../../_components/Hero'
import { HR } from '../../_components/HR'
import Filters from './Filters'

import classes from './index.module.scss'

const Posts = async () => {
  const { isEnabled: isDraftMode } = draftMode()
  let page: Page | null = null //Page for layout
  let categories: Category[] | null = null //I need this for filters
  let posts: Post[] | null = null

  try {
    //fetch page and categories
    //1 fetch page with slug 'products'
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
  } catch (error) { }
  const { hero, layout } = page
  console.log(posts)
  return (
    <Gutter>
      <Hero {...hero} />
      <div className={classes.gap}></div>
      <Blocks blocks={layout} disableTopPadding={true} />

      <HR />
    </Gutter>
  )
}

export default Posts
