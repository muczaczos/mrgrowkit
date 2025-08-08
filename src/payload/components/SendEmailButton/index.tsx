import React from 'react'
import { useForm, useFormFields } from 'payload/components/forms'
import { useDocumentInfo } from 'payload/components/utilities'

const SendEmailButton: React.FC = () => {
  const { id } = useDocumentInfo()
  const fields = useFormFields(([fields]) => fields)
  const { submit } = useForm() // ← dodane

  const email = fields.email?.value
  const messageContent = fields.messageContent?.value

  const sendEmail = async () => {
    if (!id || !email || !messageContent) {
      alert('Brakuje ID, adresu email lub treści wiadomości.')
      return
    }

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
  }


  return (
    <button
      type="button"
      onClick={sendEmail}
      style={{
        padding: '8px 12px',
        backgroundColor: '#000',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '10px',
      }}
    >
      Wyślij wiadomość prywatną
    </button>
  )
}

export default SendEmailButton
