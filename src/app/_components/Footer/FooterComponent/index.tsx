'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Footer, Media } from '../../../../payload/payload-types'
import { Button } from '../../../_components/Button'
import { inclusions, noHeaderFooterUrls, profileNavItems } from '../../../constants'
import { Gutter } from '../../Gutter'
import { Input } from '../../Input'

import classes from './index.module.scss'

const FooterComponent = ({ footer }: { footer: Footer }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<FormData>()
  const pathname = usePathname()
  const navItems = footer?.navItems || []
  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? classes.hide : ''}>
      <Gutter>
        <ul className={classes.inclusions}>
          {inclusions.map((inclusion, index) => (
            <li key={inclusion.title}>
              <Image
                src={inclusion.icon}
                alt={inclusion.title}
                width={36}
                height={36}
                className={classes.icon}
              />

              <h5 className={classes.title}>{inclusion.title}</h5>
              <p>{inclusion.description}</p>
            </li>
          ))}
        </ul>
      </Gutter>

      <div className={classes.footer}>
        <Gutter>
          <div className={classes.newsletter}>
            <Input
              name="subscribe"
              type="email"
              label=""
              placeholder="Subscribe to newsletter"
              register={register}
              error={null}
              disabled={false}
              onChange={null}
              className={classes.newsletterInput}
            />
            <Button
              className={classes.newsButton}
              label="Subscribe"
              href="/cart"
              appearance="primary"
            />
          </div>
          <div className={classes.menu}>
            <div className={classes.menuCol}>
              <section>
                <label>Products</label>
                <ul>
                  <li>
                    <Link href="/products">Growkits</Link>
                  </li>
                  <li>
                    <Link href="/Spores">Spores</Link>
                  </li>
                  <li>
                    <Link href="/products">Liquid cultures</Link>
                  </li>
                  <li>
                    <Link href="/products">Equipment</Link>
                  </li>
                  <li>
                    <Link href="/products">Best Products</Link>
                  </li>
                  <li>
                    <Link href="/products">Wholesale</Link>
                  </li>
                </ul>
              </section>
              <section>
                <label>Informations</label>
                <ul>
                  <li>
                    <Link href="/products">About Us</Link>
                  </li>
                  <li>
                    <Link href="/products">Shipping</Link>
                  </li>
                  <li>
                    <Link href="/products">Payments</Link>
                  </li>
                  <li>
                    <Link href="/products">Contact</Link>
                  </li>
                  <li>
                    <Link href="/products">Blog</Link>
                  </li>
                </ul>
              </section>
            </div>
            <div className={`${classes.menuCol} ${classes.rules}`}>
              <section>
                <label>Rules</label>
                <ul>
                  <li>
                    <Link href="/products">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link href="/products">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/products">Payments</Link>
                  </li>
                  <li>
                    <Link href="/products">Contact</Link>
                  </li>
                </ul>
              </section>
            </div>
          </div>
          <div className={classes.payments}>
            <div className={classes.paymentOptions}>
              <div className={classes.payments1}>
                <p>Ideal &nbsp;</p>
                <p>Sofort &nbsp;</p>
                <p>Cypto &nbsp;</p>
              </div>
              <div className={classes.payments2}>
                <p>Bancontact &nbsp;</p>
                <p>Giropay &nbsp;</p>
                <p>Mybank &nbsp;</p>
              </div>
            </div>
          </div>
          <div className={classes.privacy}></div>
          <div className={classes.wrap}>
            <Link href="/">
              <Image src="/logo-white.svg" alt="logo" width={170} height={50} />
            </Link>

            <div className={classes.socialLinks}>
              {navItems.map(item => {
                const icon = item?.link?.icon as Media

                return (
                  <Button
                    key={item.link.label}
                    el="link"
                    href={item.link.url}
                    newTab={true}
                    className={classes.socialLinkItem}
                  >
                    <Image
                      src={icon?.url}
                      alt={item.link.label}
                      width={24}
                      height={24}
                      className={classes.socialIcon}
                    />
                  </Button>
                )
              })}
            </div>
          </div>
        </Gutter>
      </div>
    </footer>
  )
}

export default FooterComponent
