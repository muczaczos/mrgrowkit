'use client'

import React, { Fragment } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

import { Product } from '../../../payload/payload-types'
import { AddToCartButton } from '../../_components/AddToCartButton'
import { Gutter } from '../../_components/Gutter'
import { Media } from '../../_components/Media'

import 'react-tabs/style/react-tabs.css'

import classes from './index.module.scss'

export const ProductHero: React.FC<{
  product: Product
}> = ({ product }) => {
  const { title, categories, price, meta: { image: metaImage, description } = {} } = product

  return (
    <Gutter className={classes.productHero}>
      <div className={classes.mediaWrapper}>
        {!metaImage && <div className={classes.placeholder}>No image</div>}
        {metaImage && typeof metaImage !== 'string' && (
          <Media imgClassName={classes.image} resource={metaImage} fill />
        )}
      </div>

      <div className={classes.details}>
        <h3 className={classes.title}>{title}</h3>

        <div className={classes.categoryWrapper}>
          <div className={classes.categories}>
            {categories?.map((category, index) => {
              if (typeof category === 'object' && category !== null) {
                const { title: categoryTitle } = category

                const titleToUse = categoryTitle || 'Untitled category'

                const isLast = index === categories.length - 1

                return (
                  <p key={index} className={classes.category}>
                    {titleToUse} {!isLast && <Fragment>, &nbsp;</Fragment>}
                    <span className={classes.separator}>|</span>
                  </p>
                )
              }
            })}
          </div>
          <p className={classes.stock}>In stock</p>
        </div>
        <p>{`€ ${price}`}</p>

        <div className="pt-5 pb-5">
          <Tabs>
            <TabList>
              <Tab>
                <h6>Details</h6>
              </Tab>
              <Tab>
                <h6>Description</h6>
              </Tab>
              <Tab>
                <h6>FAQ</h6>
              </Tab>
              <Tab>
                <h6>Video</h6>
              </Tab>
            </TabList>
            <div className="p3">
              <TabPanel className="">
                <p>{description}</p>
              </TabPanel>
              <TabPanel>
                <p>Tutaj umieść treść dla drugiej zakładki.</p>
              </TabPanel>
              <TabPanel>
                <p>Tutaj umieść treść dla trzeciej zakładki.</p>
              </TabPanel>
            </div>
          </Tabs>
        </div>

        <AddToCartButton product={product} className={classes.addToCartButton} />
      </div>
    </Gutter>
  )
}
