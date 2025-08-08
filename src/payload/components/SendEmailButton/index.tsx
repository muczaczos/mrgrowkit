import React, { useState } from 'react'
import { useFormFields } from 'payload/components/forms'
import { useDocumentInfo } from 'payload/components/utilities'

const SendEmailButton: React.FC = () => {
  const { id } = useDocumentInfo()
  const fields = useFormFields(([fields]) => fields)

  const email = fields.email?.value
  const messageContent = fields.messageContent?.value

  const [isSending, setIsSending] = useState(false)

  const sendEmail = async () => {
    if (!id || !email || !messageContent) {
      alert('Brakuje ID, adresu email lub treści wiadomości.')
      return
    }

    setIsSending(true)

    try {
      const res = await fetch(`/api/send-private-message`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, email, messageContent }),
      })

      if (res.ok) {
        alert('Email został wysłany!')
        window.location.reload()
      } else {
        alert('Błąd podczas wysyłki emaila.')
      }
    } catch (error) {
      alert('Wystąpił błąd podczas wysyłki emaila.')
      console.error(error)
    } finally {
      setIsSending(false)
    }
  }

  return (
    <button
      type="button"
      onClick={sendEmail}
      disabled={isSending}
      style={{
        padding: '8px 12px',
        backgroundColor: isSending ? '#555' : '#000',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: isSending ? 'not-allowed' : 'pointer',
        marginTop: '10px',
      }}
    >
      {isSending ? 'Wysyłanie...' : 'Wyślij wiadomość prywatną'}
    </button>
  )
}

export default SendEmailButton
