# Portfolio template

A one-page portfolio built as a template: all copy and data live in one file, so
swapping in real content does not mean touching layout code.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start
```

## Changing the content

Edit [`lib/content.ts`](lib/content.ts). Nothing else needs to change for a
content swap. Anything marked `CHECK` in that file still needs your input:

| What | Where |
| --- | --- |
| Name, role, headline, intro, email | `person` |
| Availability line and status indicator | `person.available`, `person.availability` |
| Phone (set to `""` to hide it) | `person.phone` |
| GitHub / LinkedIn / resume links | `person.socials` |
| Resume PDF | `public/Akhil-Baratam-DevOps-CV.pdf` |
| Degree line in the footer | `person.education` |
| Hero photograph | `portrait.src` |
| Toolchain marks | `toolchain` |
| Projects (exactly 3 fills the grid) | `work` |
| Capability clusters | `capabilities` |
| Roles and dates | `experience` |

### Resume

The file lives in `/public` and the socials entry carries a `download`
attribute, so the link saves it rather than opening a tab. Replacing the CV
means dropping a new file at the same path, or changing both `href` and
`download` in `person.socials` to match a new filename.

### Photography

The hero and project images point at `picsum.photos` seeds. Replace them with
real files in `/public` and reference them as `/portrait.jpg` etc. Every image
runs through a duotone treatment, so photographs do not need to be colour
matched to the palette.

### Toolchain marks

Marks are CSS masks, so any SVG in a square viewBox works and follows the
palette in both themes. Two gotchas:

- Simple Icons has no AWS or Azure mark (both brands asked to be removed). AWS
  comes from devicon instead. Check any new slug resolves in a browser first, or
  the mark renders blank.
- Wordmark-shaped art sits small inside a square canvas. Give it a `scale` (AWS
  uses `1.6`) so it reads at the same optical size as the glyph marks.

Loki and Karpenter are in neither icon set, so they appear in the capability
clusters as text rather than in the logo wall.

## Deploying

The site is fully static: every route prerenders at build time, and there is no
database, no API route, and no server-side data fetching.

### Vercel (recommended)

Built by the Next.js team, so `next/image`, font optimization, and the App
Router all work with no configuration. The free Hobby tier covers a personal
portfolio, and preview deployments per branch come with it.

```bash
npm i -g vercel
vercel          # first run links the project and deploys a preview
vercel --prod   # promote to production
```

Or push to GitHub and import the repo at vercel.com/new. Framework detection,
build command, and output directory are all picked up automatically.

Once you have a domain, add it under Project Settings, Domains, and set
`NEXT_PUBLIC_SITE_URL` to it so canonical and Open Graph links resolve to the
real address instead of the deployment URL.

### Other free options

| Host | Works out of the box | Trade-off |
| --- | --- | --- |
| Netlify | Yes, via the Next.js runtime | Fine, but a layer of adaptation Vercel does not need |
| Cloudflare Pages | Needs `@cloudflare/next-on-pages` | Very generous bandwidth, more setup |
| GitHub Pages | Needs a static export | `next/image` optimization has to be turned off, see below |

### If you need a static export

GitHub Pages and any plain file host require `output: "export"` in
`next.config.ts`, plus `images: { unoptimized: true }`. That last part matters:
the image optimizer is a server feature, so without it every photograph is
served at full size. Compress your images before committing them if you go this
route.

## Design system

Three rules are locked across the whole page. Breaking one is what makes a page
look assembled rather than designed:

- **One accent.** `--accent` is the only colour that is not background or text.
- **One radius.** `--radius: 3px` on every surface, image, button, and input.
- **One theme at a time.** Sections never invert. Dark and light are full
  counterpart palettes, switched by the nav toggle or `prefers-color-scheme`.

Tokens live at the top of [`app/globals.css`](app/globals.css). Changing the
palette means changing those values, not hunting through components.

Type is Geist and Geist Mono, loaded through `next/font`. Mono is reserved for
real data (dates, stack names, labels), never used for decoration.

## Motion

Two deliberate moments, plus one loop:

1. The hero headline assembles once on load.
2. Project cells and timeline rows reveal in sequence as they enter view,
   driven by `IntersectionObserver` (not a scroll listener, and not CSS
   `animation-timeline`, which Firefox still does not support).
3. The toolchain marquee pans continuously, and pauses on hover.

Everything collapses to static under `prefers-reduced-motion: reduce`.

## Stack

Next.js 15 (App Router) · Tailwind v4 · Phosphor Icons. No animation library:
the motion above is CSS plus one small observer hook, which keeps the first load
around 110 kB.
