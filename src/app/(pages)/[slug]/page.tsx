import React from 'react'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { Category, Page } from '../../../payload/payload-types'
import { staticHome } from '../../../payload/seed/home-static'
import { fetchDoc } from '../../_api/fetchDoc'
import { fetchDocs } from '../../_api/fetchDocs'
import { Blocks } from '../../_components/Blocks'
import { Button } from '../../_components/Button'
import Categories from '../../_components/Categories'
import { Gutter } from '../../_components/Gutter'
import { Hero } from '../../_components/Hero'
import { Promotion } from '../../_components/Promotion'
import { generateMeta } from '../../_utilities/generateMeta'

import classes from './index.module.scss'

// Payload Cloud caches all files through Cloudflare, so we don't need Next.js to cache them as well
// This means that we can turn off Next.js data caching and instead rely solely on the Cloudflare CDN
// To do this, we include the `no-cache` header on the fetch requests used to get the data for this page
// But we also need to force Next.js to dynamically render this page on each request for preview mode to work
// See https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
// If you are not using Payload Cloud then this line can be removed, see `../../../README.md#cache`
export const dynamic = 'force-dynamic'

export default async function Page({ params: { slug = 'home' } }) {
  const { isEnabled: isDraftMode } = draftMode()

  let page: Page | null = null
  let categories: Category[] | null = null

  try {
    page = await fetchDoc<Page>({
      collection: 'pages',
      slug,
      draft: isDraftMode,
    })
    categories = await fetchDocs<Category>('categories')
  } catch (error) {
    // when deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // so swallow the error here and simply render the page with fallback data where necessary
    // in production you may want to redirect to a 404  page or at least log the error somewhere
    // console.error(error)
  }

  // if no `home` page exists, render a static one using dummy content
  // you should delete this code once you have a home page in the CMS
  // this is really only useful for those who are demoing this template
  if (!page && slug === 'home') {
    page = staticHome
  }

  if (!page) {
    return notFound()
  }

  const { hero, layout } = page

  return (
    <React.Fragment>
      {slug === 'home' ? (
        <section>
          <div className="lg:hidden md:h-96 bg-no-repeat bg-right bg-[url('/media/hero-bike.png')] pt-10 pb-10 p-6 bg-gray-50 border-l-0 border-r-0 border-2 border-solid border-gray-100">
            <h1 className="text-white w-80% mb-0 md:mt-10 md:ml-10">
              Be <br className="md:hidden" />
              yourself <br className="md:hidden" /> and...
            </h1>
            <p className="text-white mt-2 md:ml-10">
              <span className="font-thin text-2xl ">
                ...Unleash your <br className="md:hidden" />
                own imagination.
              </span>
            </p>
            <Button
              className="mt-5 mb-5 md:mt-10 md:ml-10"
              label="SHOP NOW"
              appearance="primary"
              href="/products"
            ></Button>
          </div>
          <Gutter>
            <div className="hidden lg:block lg:h-[385px] 2xl:h-[44rem] bg-no-repeat bg-contain bg-[url('/media/hero-big.png')] pt-10 pb-10 p-6 bg-gray-50 border-l-0 border-r-0 border-2 border-solid border-gray-100">
              <h1 className="text-white lg:text-3xl lg:mt-5 lg:ml-3 w-80% mb-0 mt-52 ml-10">
                Be yourself and...
              </h1>
              <p className="text-white mt-2 lg:ml-3 md:ml-10">
                <span className="font-thin lg:text-xl text-2xl ">
                  ...Unleash your own imagination.
                </span>
              </p>
              <Button
                className="mt-5 mb-5 lg:ml-3 md:mt-10 md:ml-10"
                label="SHOP NOW"
                appearance="primary"
                href="/products"
              ></Button>
            </div>
          </Gutter>
          <Gutter className="classes.home">
            <Categories categories={categories} />
            <Promotion />
          </Gutter>
        </section>
      ) : (
        <>
          <Hero {...hero} />
          <Blocks
            blocks={layout}
            disableTopPadding={!hero || hero?.type === 'none' || hero?.type === 'lowImpact'}
          />
        </>
      )}
    </React.Fragment>
  )
}

export async function generateStaticParams() {
  try {
    const pages = await fetchDocs<Page>('pages')
    return pages?.map(({ slug }) => slug)
  } catch (error) {
    return []
  }
}

export async function generateMetadata({ params: { slug = 'home' } }): Promise<Metadata> {
  const { isEnabled: isDraftMode } = draftMode()

  let page: Page | null = null
  let categories: Category[] | null = null
  try {
    page = await fetchDoc<Page>({
      collection: 'pages',
      slug,
      draft: isDraftMode,
    })
    categories = await fetchDocs<Category>('categories')
  } catch (error) {
    // don't throw an error if the fetch fails
    // this is so that we can render a static home page for the demo
    // when deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // in production you may want to redirect to a 404  page or at least log the error somewhere
  }

  if (!page && slug === 'home') {
    page = staticHome
  }

  return generateMeta({ doc: page })
}
