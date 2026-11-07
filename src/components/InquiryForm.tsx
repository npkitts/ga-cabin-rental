import { useState, type FormEvent } from 'react'
import { AIRBNB_URL } from '../data/content'

type Status = 'idle' | 'sent' | 'error'

const INQUIRY_EMAIL = 'host@example.com'

export function InquiryForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [bringingDog, setBringingDog] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const checkIn = String(data.get('checkIn') || '').trim()
    const checkOut = String(data.get('checkOut') || '').trim()
    const guests = String(data.get('guests') || '').trim()
    const message = String(data.get('message') || '').trim()
    const dog = data.get('dog') === 'on'

    if (!name || !email || !message) {
      setStatus('error')
      return
    }

    const subject = encodeURIComponent(`Cabin inquiry from ${name}`)
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Preferred check-in: ${checkIn || 'flexible'}`,
        `Preferred check-out: ${checkOut || 'flexible'}`,
        `Guests: ${guests || 'n/a'}`,
        `Bringing a dog: ${dog ? 'Yes (small dog under 45 lbs, pre-approved)' : 'No'}`,
        '',
        message,
        '',
        `Listing: ${AIRBNB_URL}`,
      ].join('\n'),
    )

    // Local-ready: mailto fallback. Swap INQUIRY_EMAIL / endpoint later.
    const endpoint = (import.meta as ImportMeta & { env: Record<string, string> }).env
      ?.VITE_INQUIRY_ENDPOINT

    if (endpoint) {
      void fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          checkIn,
          checkOut,
          guests,
          dog,
          message,
        }),
      })
        .then(() => {
          setStatus('sent')
          form.reset()
          setBringingDog(false)
        })
        .catch(() => {
          window.location.href = `mailto:${INQUIRY_EMAIL}?subject=${subject}&body=${body}`
          setStatus('sent')
        })
      return
    }

    window.location.href = `mailto:${INQUIRY_EMAIL}?subject=${subject}&body=${body}`
    setStatus('sent')
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="form__row">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" required />
        </div>
      </div>
      <div className="form__row">
        <div className="field">
          <label htmlFor="checkIn">Preferred check-in</label>
          <input id="checkIn" name="checkIn" type="date" />
        </div>
        <div className="field">
          <label htmlFor="checkOut">Preferred check-out</label>
          <input id="checkOut" name="checkOut" type="date" />
        </div>
      </div>
      <div className="form__row">
        <div className="field">
          <label htmlFor="guests">Guests</label>
          <select id="guests" name="guests" defaultValue="2">
            <option value="1">1 guest</option>
            <option value="2">2 guests</option>
            <option value="3">3 guests</option>
            <option value="4">4 guests</option>
          </select>
        </div>
        <div className="field" style={{ alignContent: 'end' }}>
          <label className="check" htmlFor="dog">
            <input
              id="dog"
              name="dog"
              type="checkbox"
              checked={bringingDog}
              onChange={(e) => setBringingDog(e.target.checked)}
            />
            <span>Bringing a small dog (under 45 lbs, pre-approved)</span>
          </label>
        </div>
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Tell us about your trip, timing, or questions…"
        />
      </div>
      <button className="btn btn--dark" type="submit">
        Send inquiry
      </button>
      <p className={`form__status${status === 'error' ? ' is-error' : ''}`} role="status">
        {status === 'sent' && 'Thanks — your mail client should open with the inquiry ready to send.'}
        {status === 'error' && 'Please add your name, email, and a short message.'}
        {status === 'idle' && 'Works locally via email. Ready for a real form endpoint later.'}
      </p>
    </form>
  )
}
