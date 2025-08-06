import type { PayloadHandler } from 'payload/config'
import type { PayloadRequest } from 'payload/types'

import { checkRole } from '../collections/Users/checkRole'

const logs = process.env.LOGS_SEND_EMAIL === '1'

export const sendPrivateMessage: PayloadHandler = async (req: PayloadRequest, res) => {
  // 🔹 Odbieramy dane z formularza
  const { id, email, messageContent } = req.body

  console.log('✅ Endpoint send-private-message został załadowany')

  // 🔐 Sprawdzamy uprawnienia admina
  if (!req.user || !checkRole(['admin'], req.user)) {
    if (logs) req.payload.logger.error({ err: `Unauthorized email attempt` })
    return res.status(401).json({ error: 'Not authorized' })
  }

  if (!id || !email || !messageContent) {
    return res.status(400).json({ error: 'Missing data in request body' })
  }

  // 🔸 Pomijamy pobieranie ordera z bazy, bo dane już są w req.body

  try {
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

    if (logs) req.payload.logger.info({ msg: `✅ Sent private message to ${email}` })

    res.status(200).json({ success: true })
  } catch (error: unknown) {
    if (logs) req.payload.logger.error({ err: `❌ Error sending message: ${error}` })
    res.status(500).json({ error: 'Error sending message' })
  }
}
