import type { PayloadHandler } from 'payload/config'
import type { PayloadRequest } from 'payload/types'

import { checkRole } from '../collections/Users/checkRole'

const logs = process.env.LOGS_SEND_EMAIL === '1'

export const sendPrivateMessage: PayloadHandler = async (req: PayloadRequest, res) => {
  const { id } = req.body
  console.log('✅ Endpoint send-private-message został załadowany')

  if (!req.user || !checkRole(['admin'], req.user)) {
    if (logs) req.payload.logger.error({ err: `Unauthorized email attempt` })
    return res.status(401).json({ error: 'Not authorized' })
  }

  if (!id) {
    return res.status(400).json({ error: 'Missing order ID' })
  }

  try {
    const order = await req.payload.findByID({
      collection: 'orders',
      id,
    })

    if (!order) {
      return res.status(404).json({ error: 'Order not found' })
    }

    if (!order.email) {
      return res.status(400).json({ error: 'Order has no email address' })
    }

    const htmlContent = `<p>${order.messageContent || 'No message content provided.'}</p>`

    try {
      await req.payload.sendEmail({
        to: order.email,
        from: 'shop@planet-of-mushrooms.com',
        subject: 'Private Message',
        html: htmlContent,
      })
    } catch (error: unknown) {
      console.log('error:' + error)
    }

    if (logs) req.payload.logger.info({ msg: `Sent private message to ${order.email}` })

    res.status(200).json({ success: true })
  } catch (error: unknown) {
    if (logs) req.payload.logger.error({ err: `Error sending message: ${error}` })
    res.status(500).json({ error: `Error sending message` })
  }
}
