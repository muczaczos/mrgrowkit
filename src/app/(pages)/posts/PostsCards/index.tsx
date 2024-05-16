import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import classes from './index.module.scss'

const PostsCards = ({ pages, posts }) => {
  return (
    <section className={classes.posts}>
      {pages.map((item, index) => {
        if (pages !== null) {
          if (!pages) return null
          // console.log(pagesmages[index])
          //  console.log('dupa')
          // console.log(posts[0].slug)
          // console.log(process.env.NEXT_PUBLIC_SERVER_URL + '/' + posts[index].slug)
          const src = '/media/' + pages[index].meta.image.filename
          const href = process.env.NEXT_PUBLIC_SERVER_URL + '/posts/' + posts[index].slug
          const title = pages[index].title.substring(0, 35) + '...'
          const description = pages[index].meta.description.substring(0, 40) + '...'
          return (
            <div className={classes.link}>
              <Link className={classes.link} href={href}>
                <div className="">
                  <Image className={classes.image} alt="dupa" src={src} width="300" height="180" />
                </div>
              </Link>
              <h6 className={classes.title}>{title}</h6>
              <p className={classes.description}>{description}</p>
            </div>
          )
        }
        return null
      })}
    </section>
  )
}

export default PostsCards
