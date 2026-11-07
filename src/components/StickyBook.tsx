import { useEffect, useState } from 'react'
import { AIRBNB_URL } from '../data/content'

export function StickyBook() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const nearBottom =
        window.innerHeight + y >= document.documentElement.scrollHeight - 320
      setVisible(y > window.innerHeight * 0.7 && !nearBottom)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`sticky-book${visible ? ' is-visible' : ''}`} aria-hidden={!visible}>
      <p>Ready for mountain quiet?</p>
      <a className="btn btn--primary" href={AIRBNB_URL} target="_blank" rel="noreferrer">
        Check dates
      </a>
    </div>
  )
}
