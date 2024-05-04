import axios from 'axios'
import dotenv from 'dotenv'
import next from 'next'
import nextBuild from 'next/dist/build'
import path from 'path'

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
})

import express from 'express'
import payload from 'payload'

import { seed } from './payload/seed'

const app = express()
const PORT = process.env.PORT || 3000

// Dodaj middleware, który odczyta dane JSON z ciała żądania
app.use(express.json())

app.post('/cashbill-payment', async (req, res) => {
  try {
    // Odczytaj dane z ciała żądania
    const requestData = req.body
    //  console.log(requestData)
    // Tutaj możesz użyć danych przekazanych z frontendu
    const response = await axios.post(
      'https://pay.cashbill.pl/testws/rest/payment/grzybole.pl',
      requestData,
    )
    //   console.log(response)
    res.status(200).json(response.data)
  } catch (error: unknown) {
    // console.error('Error:', error.message)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

app.post('/send-email', async (req, res) => {
  try {
    // Odczytaj dane z ciała żądania
    const requestData = req.body
    await payload.sendEmail({
      to: 'muczaczos@gmail.com',
      from: 'shop@planet-of-mushrooms.com',
      subject: 'New Message from: ' + requestData.name,
      html: 'Email: ' + requestData.email + ' Content: ' + requestData.message,
    })
  } catch (error: unknown) {
    // console.error('Error:', error.message)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

const start = async (): Promise<void> => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET || '',
    express: app,
    onInit: () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  if (process.env.PAYLOAD_SEED === 'true') {
    await seed(payload)
    process.exit()
  }

  if (process.env.NEXT_BUILD) {
    app.listen(PORT, async () => {
      payload.logger.info(`Next.js is now building...`)
      // @ts-expect-error
      await nextBuild(path.join(__dirname, '../'))
      process.exit()
    })

    return
  }

  const nextApp = next({
    dev: process.env.NODE_ENV !== 'production',
  })

  const nextHandler = nextApp.getRequestHandler()

  app.use((req, res) => nextHandler(req, res))

  nextApp.prepare().then(() => {
    payload.logger.info('Starting Next.js...')

    app.listen(PORT, async () => {
      payload.logger.info(`Next.js App URL: ${process.env.PAYLOAD_PUBLIC_SERVER_URL}`)
    })
  })
}

start()
