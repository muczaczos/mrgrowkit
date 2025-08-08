import type { PayloadHandler } from 'payload/config'
import type { PayloadRequest } from 'payload/types'

import { checkRole } from '../collections/Users/checkRole'

const logs = process.env.LOGS_SEND_EMAIL === '1'

export const sendPrivateMessage: PayloadHandler = async (req: PayloadRequest, res) => {
  const { id, email, messageContent } = req.body

  console.log('✅ Endpoint send-private-message został załadowany')

  if (!req.user || !checkRole(['admin'], req.user)) {
    if (logs) req.payload.logger.error({ err: `Unauthorized email attempt` })
    return res.status(401).json({ error: 'Not authorized' })
  }

  if (!id || !email || !messageContent) {
    return res.status(400).json({ error: 'Missing data in request body' })
  }

  try {
    // Wysyłka maila
    await req.payload.sendEmail({
      to: email,
      from: 'Planet of Mushrooms <shop@planet-of-mushrooms.com>',
      replyTo: 'shop@planet-of-mushrooms.com',
      subject: 'Order note from Planet of Mushrooms',
      text: messageContent,
      html: `<p>${messageContent}</p>`,
      headers: {
        'Message-ID': `<${Date.now()}@planet-of-mushrooms.com>`,
      },
    })

    // Pobranie zamówienia
    const order = await req.payload.findByID({
      collection: 'orders',
      id,
      overrideAccess: true,
      depth: 0,
    })

    console.log('Order before update:', order)

    const now = new Date().toISOString()

    const updatedMessages = [
      ...(order.privateMessages || []),
      {
        sentAt: now,
        content: messageContent,
        sentBy: req.user.id,
      },
    ]

    // Zapis do bazy bez pomijania hooków
    await req.payload.update({
      collection: 'orders',
      id,
      overrideAccess: true,
      data: {
        privateMessages: updatedMessages,
      },
      context: {
        skipEmailHook: true,  // <-- to jest kluczowe
      },
    })

    if (logs) req.payload.logger.info({ msg: `✅ Sent private message to ${email}` })

    return res.status(200).json({ success: true })
  } catch (error: unknown) {
    console.error('❌ Błąd w sendPrivateMessage:', error)
    if (logs) req.payload.logger.error({ err: `❌ Error sending message: ${error}` })

    return res.status(500).json({ error: 'Error sending message' })
  }
}
