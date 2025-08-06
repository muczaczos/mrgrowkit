import React from 'react'
import { useFormFields } from 'payload/components/forms'
import { useDocumentInfo } from 'payload/components/utilities'

const SendEmailButton: React.FC = () => {
  // 🔹 Pobieramy ID aktualnego dokumentu (zamówienia)
  const { id } = useDocumentInfo()

  // 🔹 Używamy hooka do pobrania pól formularza w czasie rzeczywistym
  const fields = useFormFields(([fields]) => fields)

  // 🔹 Pobieramy wartości z formularza – BEZ zapisywania do bazy
  const email = fields.email?.value
  const messageContent = fields.messageContent?.value

  const sendEmail = async () => {
    // 🔸 Prosta walidacja
    if (!id || !email || !messageContent) {
      alert('Brakuje ID, adresu email lub treści wiadomości.')
      return
    }

    // 🔹 Wysyłamy dane do customowego endpointu bez zapisu w kolekcji
    const res = await fetch(`/api/send-private-message`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, email, messageContent }), // ⬅️ Wysyłamy aktualną treść z formularza
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
