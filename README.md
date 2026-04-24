# Dr Noureddine Boulaguiem Website

Static Next.js website for training events in homeopathy and Sujok across Morocco.

## Install

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## Edit Events

Events live in `src/data/events.ts`.

To add a new event, copy one event object, paste it inside the `events` array, and update:

- `title`
- `date`
- `time`
- `city`
- `venue`
- `shortText`
- `limitedPlaces`
- `whatsappMessage`

No price or level is shown on the website.

## Change WhatsApp Number

Edit `src/config/site.ts`.

- `whatsappDisplay` is the phone number shown on the website.
- `whatsappNumber` is the international WhatsApp number used in links, without `+` or spaces.

## Build

```bash
npm run build
```

The site is configured with `output: "export"` for static deployment.

## Deploy to Cloudflare Pages

Use these settings:

- Framework preset: Next.js
- Build command: `npm run build`
- Output directory: `out`
- Node.js version: 20 or newer

After deployment, Cloudflare Pages will serve the exported static site from the `out` directory.
