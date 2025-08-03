import React from 'react'
import { useFormFields } from 'payload/components/forms'
import { useDocumentInfo } from 'payload/components/utilities'

const SendEmailButton: React.FC = () => {
  const { id } = useDocumentInfo()
  const fields = useFormFields(([fields]) => fields)
  const email = fields.email?.value
  const messageContent = fields.messageContent?.value

  const sendEmail = async () => {
    if (!id) return alert('Brak ID zamówienia')
    const res = await fetch(`/api/send-private-message`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, email, messageContent }),
    })

    if (res.ok) {
      alert('Email został wysłany!')
    } else {
      alert('Błąd podczas wysyłki emaila.')
    }
  }

  return (
    <button
      type="button"
      onClick={sendEmail}
      style={{ padding: '8px 12px', backgroundColor: '#000', color: '#fff', border: 'none' }}
    >
      Wyślij wiadomość prywatną
    </button>
  )
}

export default SendEmailButton
