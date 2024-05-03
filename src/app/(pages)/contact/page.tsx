'use client'
import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import { Metadata } from 'next'
import Image from 'next/image'

import { Page } from '../../../payload/payload-types'
import { fetchDoc } from '../../_api/fetchDoc'
import { Button } from '../../_components/Button'
import { Gutter } from '../../_components/Gutter'
import { generateMeta } from '../../_utilities/generateMeta'

import classes from './index.module.scss'

// Force this page to be dynamic so that Next.js does not cache it
// See the note in '../[slug]/page.tsx' about this
export const dynamic = 'force-dynamic'

export default function Contact() {
  const handleWhatsAppClick = () => {
    // Twój numer telefonu WhatsApp
    const phoneNumber = '1234567890'
    // Twój wiadomość, którą chcesz wysłać
    const message = 'Cześć! Jestem zainteresowany Twoją ofertą.'
    // Tworzymy link do WhatsApp z numerem telefonu i wiadomością
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    // Przekierowanie użytkownika do aplikacji WhatsApp
    window.location.href = whatsappUrl
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
                className="opacity-70 mb-5"
              />
              <h3>James</h3>
              <h4>Mushrooms Grower</h4>
              <p>Chat with Whatsapp</p>
              <Button onClick={handleWhatsAppClick}>Skontaktuj się przez WhatsApp</Button>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-xl mb-5">
              <Image
                src="/media/Adiva.svg"
                alt="Adiva is avatar"
                width={200}
                height={200}
                className="opacity-70 mb-5"
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
                className="opacity-70 mb-5"
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
