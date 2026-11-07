import { useEffect, useState } from 'react'
import { AIRBNB_URL, brand } from '../data/content'

export function Nav() {
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`top-nav${solid ? ' is-solid' : ''}`}>
      <a className="top-nav__brand" href="#top">
        {brand.name}
      </a>
      <ul className="top-nav__links">
        <li>
          <a href="#trail">The land</a>
        </li>
        <li>
          <a href="#day">A day here</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#reviews">Reviews</a>
        </li>
        <li>
          <a href="#inquire">Inquire</a>
        </li>
      </ul>
      <a className="top-nav__cta" href={AIRBNB_URL} target="_blank" rel="noreferrer">
        Book on Airbnb
      </a>
    </header>
  )
}
