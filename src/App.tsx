import { Nav } from './components/Nav'
import { StickyBook } from './components/StickyBook'
import { InquiryForm } from './components/InquiryForm'
import { Reveal } from './components/Reveal'
import {
  AIRBNB_URL,
  amenities,
  brand,
  facts,
  images,
  itinerary,
  locals,
  seasons,
} from './data/content'
import reviewsData from './data/reviews.json'

type Review = {
  guest_name: string
  location: string
  date: string
  star_rating: number
  stay_details?: string
  review_text: string
}

const reviews = reviewsData.reviews as Review[]

export default function App() {
  return (
    <div className="site-shell" id="top">
      <Nav />

      <section className="hero" aria-label="Hero">
        <div className="hero__media" aria-hidden="true">
          <img
            src={images.hero}
            alt=""
            width={1600}
            height={1067}
            fetchPriority="high"
          />
          <div className="hero__scrim" />
        </div>
        <div className="hero__content">
          <h1 className="hero__brand">{brand.name}</h1>
          <p className="hero__sub">{brand.subhead}</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href={AIRBNB_URL} target="_blank" rel="noreferrer">
              Book on Airbnb
            </a>
            <a className="btn btn--ghost" href="#day">
              See a day on the mountain
            </a>
          </div>
        </div>
      </section>

      <section className="ritual" aria-label="Morning on the deck">
        <div className="ritual__media" aria-hidden="true">
          <img src={images.deckMorning} alt="" width={1400} height={933} loading="lazy" />
          <div className="ritual__scrim" />
        </div>
        <Reveal>
          <div className="ritual__copy">
            <p className="section__eyebrow" style={{ color: 'var(--amber)' }}>
              Morning ritual
            </p>
            <h2>Coffee on the wraparound deck</h2>
            <p>
              Escape the rush. Slow down. Breathe. Settle into mountain life with a quiet mug in
              the treetops — peaceful mornings, unforgettable sunsets, and cozy evenings waiting
              just beyond the railing.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="section" id="trail">
        <div className="section__inner trail">
          <Reveal>
            <figure className="trail__figure">
              <img
                src={images.trail}
                alt="Wooded hillside along the cabin’s private acres"
                width={1200}
                height={900}
                loading="lazy"
              />
            </figure>
          </Reveal>
          <Reveal>
            <div>
              <p className="section__eyebrow">Two private acres</p>
              <h2 className="section__title">Your own path through the trees</h2>
              <p className="section__lede">
                Full private access to the cabin, wraparound deck, and all two mountainside acres.
                Wander the private walking trail, watch for wildlife, and let the North Georgia
                quiet do its work.
              </p>
              <div className="trail__facts">
                <div className="trail__fact">
                  <strong>{facts.acres}</strong>
                  <span>private acres</span>
                </div>
                <div className="trail__fact">
                  <strong>{facts.guests}</strong>
                  <span>guests max</span>
                </div>
                <div className="trail__fact">
                  <strong>{facts.bedrooms}</strong>
                  <span>bedrooms · {facts.baths} baths</span>
                </div>
                <div className="trail__fact">
                  <strong>{facts.rating}</strong>
                  <span>from {facts.reviewCount} Airbnb reviews</span>
                </div>
              </div>
              <ul className="amenities">
                {amenities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section itinerary" id="day">
        <div className="section__inner">
          <Reveal>
            <p className="section__eyebrow">Itinerary</p>
            <h2 className="section__title">A day on the mountain</h2>
            <p className="section__lede">
              Not a schedule — a rhythm. Deck light, trail quiet, lake air, and a firelit return.
            </p>
          </Reveal>
          <div className="itinerary__grid">
            {itinerary.map((item) => (
              <Reveal key={item.time}>
                <article className="itinerary__item">
                  <p className="itinerary__time">{item.time}</p>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="locals">
        <div className="section__inner">
          <Reveal>
            <p className="section__eyebrow">Near Lake Chatuge</p>
            <h2 className="section__title">When you feel like wandering</h2>
            <p className="section__lede">
              Water, waterfalls, vineyard pours, and Appalachian Trail miles — then the soft
              drive home among the trees.
            </p>
          </Reveal>
          <div className="locals__grid">
            {locals.map((item) => (
              <Reveal key={item.title}>
                <article className="locals__item">
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <figure className="locals__visual">
              <img
                src={images.mountain}
                alt="Mountain ridges seen through autumn forest near the cabin"
                width={1600}
                height={900}
                loading="lazy"
              />
              <figcaption className="locals__caption">Young Harris · North Georgia mountains</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="section gallery" id="gallery">
        <div className="section__inner">
          <Reveal>
            <p className="section__eyebrow">Inside & out</p>
            <h2 className="section__title">The cabin in the canopy</h2>
            <p className="section__lede">
              Fully furnished retreat for couples or small families — cozy evenings in the
              treetops, fire pit nights, and room to exhale.
            </p>
          </Reveal>
          <div className="gallery__grid">
            {images.gallery.map((src, i) => (
              <figure key={src}>
                <img
                  src={src}
                  alt={`Cabin photo ${i + 1}`}
                  loading="lazy"
                  width={800}
                  height={1000}
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="seasons">
        <div className="section__inner">
          <Reveal>
            <p className="section__eyebrow">What to pack</p>
            <h2 className="section__title">Come ready for the season</h2>
            <p className="section__lede">
              The cabin stays the same. The mountain changes the mood. Pack light, pack warm
              layers, leave the hurry behind.
            </p>
          </Reveal>
          <div className="seasons__grid">
            {seasons.map((s) => (
              <Reveal key={s.name}>
                <article className="season">
                  <h3>{s.name}</h3>
                  <p>{s.mood}</p>
                  <p className="season__pack">Pack: {s.pack}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section reviews" id="reviews">
        <div className="section__inner">
          <Reveal>
            <p className="section__eyebrow">Guest words</p>
            <h2 className="section__title">Loved for the quiet details</h2>
            <p className="section__lede">
              Real stays from Airbnb guests — cleanliness, comfort, and Teresa’s hospitality come
              up again and again.
            </p>
            <div className="reviews__score">
              <strong>{reviewsData.overall_rating}</strong>
              <span>
                · {reviewsData.total_review_count} reviews on Airbnb · hosted by {facts.host}
              </span>
            </div>
          </Reveal>
          <div className="reviews__grid">
            {reviews.map((review) => (
              <Reveal key={`${review.guest_name}-${review.date}`}>
                <article className="review">
                  <div className="review__meta">
                    <span className="review__name">{review.guest_name}</span>
                    <span className="review__when">
                      {review.date}
                      {review.location ? ` · ${review.location}` : ''} · {review.star_rating}★
                    </span>
                  </div>
                  <blockquote>“{review.review_text.replace(/\.\.\.$/, '…')}”</blockquote>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="reviews__attrib">
            Reviews imported from the public Airbnb listing.{' '}
            <a href={AIRBNB_URL} target="_blank" rel="noreferrer">
              Read all {reviewsData.total_review_count} reviews on Airbnb
            </a>
            . Attribution: Airbnb guest reviews.
          </p>
        </div>
      </section>

      <section className="place" id="place" aria-label="Location atmosphere">
        <div className="place__media" aria-hidden="true">
          <img src={images.exterior} alt="" width={1600} height={1067} loading="lazy" />
          <div className="place__scrim" />
        </div>
        <Reveal>
          <div className="place__copy">
            <p className="section__eyebrow" style={{ color: 'var(--amber)' }}>
              Young Harris, Georgia
            </p>
            <h2>Among the treetops, near the lake</h2>
            <p>
              A small community of about fifteen homes on the side of a mountain — very quiet and
              secluded. Exact address shared after booking. {brand.tagline}
            </p>
            <a className="btn btn--primary" href={AIRBNB_URL} target="_blank" rel="noreferrer">
              View availability on Airbnb
            </a>
          </div>
        </Reveal>
      </section>

      <section className="section" id="inquire">
        <div className="section__inner inquiry">
          <Reveal>
            <div>
              <p className="section__eyebrow">Plan your stay</p>
              <h2 className="section__title">Ask about dates</h2>
              <p className="section__lede">
                Have a question before you book? Send preferred dates, guest count, and anything
                about traveling with a small dog. Booking itself happens on Airbnb.
              </p>
              <div className="nudge">
                <p>
                  Soft availability check: open the listing to see live calendars, pricing, and
                  house rules before you commit.
                </p>
                <a className="btn btn--primary" href={AIRBNB_URL} target="_blank" rel="noreferrer">
                  Check Airbnb calendar
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <InquiryForm />
          </Reveal>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__inner">
          <div>
            <strong>{brand.name}</strong>
            <span>
              {brand.location} · Sleeps {facts.guests}
            </span>
          </div>
          <div>
            Book via{' '}
            <a href={AIRBNB_URL} target="_blank" rel="noreferrer">
              Airbnb listing {AIRBNB_URL.split('/').pop()}
            </a>
            <br />
            Photos sourced from the public listing · more host photos coming later
          </div>
        </div>
      </footer>

      <StickyBook />
    </div>
  )
}
