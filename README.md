# A Little Closer to Nature

Marketing site for a North Georgia mountainside cabin near Lake Chatuge (Airbnb listing 35427346).

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Notes

- Primary booking CTA → https://www.airbnb.com/rooms/35427346
- Photos cached under `public/images/` from the public Airbnb listing
- Reviews imported from the public listing with Airbnb attribution
- Inquiry form uses mailto locally; set `VITE_INQUIRY_ENDPOINT` for a real form backend later
