import { connectToDatabase } from './connectMongo'

export default async function sitemap() {
  const client = await connectToDatabase()
  const db = client.db('planet2')
  const data = await db.collection('posts').find({}).toArray()

  console.log(data)
  return [
    {
      url: 'http://localhost:3000/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://acme.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://acme.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]
}
