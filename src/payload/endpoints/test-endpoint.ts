import type { PayloadHandler } from 'payload/config'

export const testEndpoint: PayloadHandler = async (req, res) => {
  res.status(200).json({ message: 'Test endpoint działa!' })
}
