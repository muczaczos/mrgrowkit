import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import { Metadata } from 'next'
import Image from 'next/image'

import { Page } from '../../../payload/payload-types'
import { fetchDoc } from '../../_api/fetchDoc'
import { Gutter } from '../../_components/Gutter'
import { generateMeta } from '../../_utilities/generateMeta'

import classes from './index.module.scss'

// Force this page to be dynamic so that Next.js does not cache it
// See the note in '../[slug]/page.tsx' about this
export const dynamic = 'force-dynamic'

export default async function Contact() {
  let page: Page | null = null

  try {
    page = await fetchDoc<Page>({
      collection: 'pages',
      slug: 'about',
    })
  } catch (error) {
    // when deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // so swallow the error here and simply render the page with fallback data where necessary
    // in production you may want to redirect to a 404  page or at least log the error somewhere
    // console.error(error)
  }

  return (
    <div className="relative">
      <div
        className="opacity-70 h-96 bg-cover md:hidden"
        style={{ backgroundImage: "url('/media/contact.jpg')" }}
      >
        {/* Tło */}
      </div>
      <div
        className="z-0 opacity-70 hidden md:block absolute top-0 left-0 w-1/2 h-screen bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/media/contact.jpg')" }}
      >
        {/* Tło */}
      </div>
      <Gutter className="relative z-0">
        <div className="md:ml-24 lg:ml-48">
          <h1 className="mt-10 text-right">Contact us</h1>
          <h4 className="text-right">UiTeH</h4>
          <h4 className="text-right">Zbyszewska 17</h4>
          <h4 className="text-right">05-600 Grójec</h4>
          <h4 className="text-right">Poland</h4>
          <h4 className="text-right">VatUE: PL7971643224</h4>

          <section className="flex flex-col lg:flex-row gap-5 mt-10 mb-16">
            <div className="bg-gray-50 rounded-xl p-6 shadow-xl mb-5">
              <Image
                src="/media/Jan.svg"
                alt="James is avatar"
                width={200}
                height={200}
                className={classes.avatar}
              />
              <h3>James</h3>
              <h4>Mushrooms Grower</h4>
              <p>
                My name is James and I have been a mushroom farmer for fifteen years. I’ve worked in
                a few cubensis grow kit stores, but now I work with Arek. I want to share my
                knowledge with you. You can contact me via chat from 9am to 5pm.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-xl mb-5">
              <Image
                src="/media/Adiva.svg"
                alt="Adiva is avatar"
                width={200}
                height={200}
                className={classes.avatar}
              />
              <h3>Adiva</h3>
              <h4>Help Desk</h4>
              <p>
                My name is Adiva and I am waiting for your e-mail. You can talk to me in English or
                Polish. I will be happy to answer any questions about our store. My mission is to
                help people solve their problems.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-xl mb-5">
              <Image
                src="/media/arek.svg"
                alt="Arek is avatar"
                width={200}
                height={200}
                className={classes.avatar}
              />
              <h3>Arek</h3>
              <h4>IT Technican</h4>
              <p>
                Hi, I’m Arek and apart from mushrooms I love computers. If you have any problems
                with payment, the functioning of our website or the shipment, just give me a call. I
                will try to help you.
              </p>
            </div>
          </section>
        </div>
      </Gutter>
    </div>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  let page: Page | null = null

  try {
    page = await fetchDoc<Page>({
      collection: 'pages',
      slug: 'contact',
    })
  } catch (error) {
    // don't throw an error if the fetch fails
    // this is so that we can render a static cart page for the demo
    // when deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // in production you may want to redirect to a 404  page or at least log the error somewhere
  }

  if (!page) {
    page = null
  }

  return generateMeta({ doc: page })
}
