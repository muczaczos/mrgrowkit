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
            </TabList>
            <div className="p3">
              <TabPanel className="">
                <p>{description}</p>
              </TabPanel>
              <TabPanel>
                <p>Tutaj umieść treść dla drugiej zakładki.</p>
              </TabPanel>
              <TabPanel>
                <div
                  style={{
                    height: '200px', // Stała wysokość ramki
                    overflowX: 'auto', // Przewijanie poziome w przypadku długiego tekstu
                    overflowY: 'auto', // Przewijanie pionowe w przypadku długiego tekstu
                    border: 'none', // Usunięcie obramowania
                    outline: 'none', // Usunięcie obramowania po kliknięciu
                    scrollbarWidth: 'thin' /* Grubość paska przewijania */,
                    scrollbarColor:
                      'rgba(0, 0, 0, 0.3) rgba(0, 0, 0, 0)' /* Kolor paska przewijania */,
                  }}
                >
                  <h6>Question: What is Grow Kit Cubensis Ecuador? </h6>
                  <p>
                    Answer: Grow Kit Cubensis Ecuador is a mushroom cultivation kit containing
                    everything needed to grow Cubensis mushrooms from start to finish.
                  </p>
                  <h6>Question: What are the main components of Grow Kit Cubensis Ecuador?</h6>
                  <p>
                    Answer: The kit typically includes a container or bag with substrate, grow bags,
                    bag clips, and additional sometimes box with soil or compost.
                  </p>
                  <h6>
                    Question: How long does it take to grow Cubensis Ecuador using the Grow Kit?
                  </h6>
                  <p>
                    Answer: Depending on the growing conditions and process, the time from setting
                    up the kit to harvesting can range from 1-2 weeks to 2 months.
                  </p>
                  <h6>Question: What are the storage conditions for Grow Kit Cubensis Ecuador?</h6>
                  <p>
                    Answer: It's best to store the kit in a cool, dark place, avoiding large
                    fluctuations in temperature and humidity. 2-4*C
                  </p>
                  <h6>Question: How often should I water Grow Kit Cubensis Ecuador?</h6>
                  <p>
                    Answer: Water should be provided regularly, but overwatering should be avoided,
                    as it can lead to mold growth. Only spray water inside bag walls.
                  </p>
                  <h6>Question: Can Grow Kit Cubensis Ecuador be grown indoors?</h6>
                  <p>
                    Answer: Yes, the kit can be grown indoors, provided adequate temperature and
                    lighting conditions are provided.
                  </p>
                  <h6>
                    Question: What are the optimal temperature conditions for growing Grow Kit
                    Cubensis Ecuador?
                  </h6>
                  <p>
                    Answer: The temperature is best maintained between 20°C to 25°C to ensure
                    optimal mushroom growth.
                  </p>
                  <h6>Question: Is Grow Kit Cubensis Ecuador legal?</h6>
                  <p>
                    Answer: The legality of growing Cubensis mushrooms varies depending on
                    jurisdiction. In some places, it may be legal for personal use, in others you can store
                    mycelium for microscopic research, while in others, it may be prohibited.
                  </p>
                  <h6>
                    Question: What are the potential risks associated with growing Grow Kit Cubensis
                    Ecuador?
                  </h6>
                  <p>
                    Answer: The main risks include contamination, excess moisture, mold, and
                    potential legal consequences depending on local regulations.
                  </p>
                  <h6>Question: What is the application of Cubensis Ecuador mushrooms?</h6>
                  <p>
                    Answer: Cubensis Ecuador mushrooms contain psilocybin, a psychoactive substance
                    that can induce changes in consciousness and psychedelic experiences. They are
                    used for recreational,therapeutic, and spiritual purposes, but only in countries where
                    it is legal.
                  </p>
                </div>
              </TabPanel>
            </div>
          </Tabs>
        </div>

        <AddToCartButton product={product} className={classes.addToCartButton} />
      </div>
    </Gutter>
  )
}
