# NevroLabs

NevroLabs is a software engineering company specializing in delivering end-to-end digital products and platforms. We combine product-minded engineering, modern design, and data-driven AI capabilities to help organizations build scalable web and mobile applications.

## Who we are

NevroLabs brings together a multidisciplinary team of engineers, designers, and product managers with deep experience across frontend, backend, cloud, and mobile development. We focus on solving complex problems with pragmatic engineering and clear communication.

## Our mission

To accelerate product teams by delivering reliable, secure, and high-performance software that users love — while enabling our clients to iterate quickly and confidently.

## Core services

- Product & Engineering Strategy: roadmap, architecture reviews, and technical due diligence
- Custom Web & Mobile Development: React, Next.js, native mobile, and cross-platform solutions
- Backend & Cloud Engineering: scalable APIs, microservices, serverless, and DevOps (CI/CD)
- AI & Data Integration: practical AI/ML features, analytics pipelines, and model integration
- UX/UI Design & Prototyping: design systems, interaction design, and usability testing
- Staff Augmentation & Dedicated Teams: flexible resourcing for short- and long-term projects

## Industries we serve

- SaaS and marketplaces
- Fintech and payments
- Healthcare and wellness
- E-commerce and retail
- Internal tools and developer platforms

## Why clients choose us

- Senior-led engineering and clear technical ownership
- Rapid delivery with a focus on quality and maintainability
- Emphasis on measurable outcomes and product-market fit
- Deep experience integrating AI features responsibly and securely

## Notable capabilities

- Scalable cloud architectures (AWS / GCP / Firebase)
- Real-time features and streaming architectures
- End-to-end product delivery from discovery to monitoring
- Security-conscious development and compliance-aware implementations

## Team highlights

We value small, empowered teams. Our core leadership combines experience building consumer and enterprise products across multiple domains. If you need changes to the team listing, edit `src/components/sections/team.tsx` where member profiles and social links are managed.

## Get in touch

Email: `nevrolabs@gmail.com`

We welcome inquiries about new projects, partnerships, or open roles. Please include a short description of your goals, timeline, and budget when contacting us.

## Careers

We're growing — if you're passionate about building high-quality software and want to join a collaborative team, reach out via email with your resume and portfolio.

## Brand & visual identity

Primary color: Futuristic cyan (#3BE2FF)

Background: Dark navy (#121E29)

Accent: Electric purple (#C452FF)

Fonts: 'Space Grotesk' for headlines and a clean sans-serif for body text.

---

## Quick start

Prerequisites

- Node.js (LTS recommended, Node 18+ is a safe choice)
- npm (or pnpm/yarn if you prefer)

Install dependencies:

```powershell
cd 'c:\Users\janit\OneDrive\Documents\GitHub\official-Web'
npm install
```

Run the development server:

```powershell
npm run dev
```

Open your browser to the URL shown in the console (the `dev` script uses `--turbopack -p 9002` so likely `http://localhost:9002`).

Build for production:

```powershell
npm run build
npm start
```

Developer tools available in `package.json`:

- `npm run dev` — Start Next.js in development (port 9002)
- `npm run build` — Build for production
- `npm start` — Run the production server
- `npm run lint` — Run ESLint
- `npm run typecheck` — Run TypeScript type-checking
- `npm run genkit:dev` / `genkit:watch` — AI tooling (requires `genkit`)

## Environment & Firebase

This project uses Firebase (Firestore) for backend data in some features. Firebase configuration has been moved to environment variables and `src/lib/firebase.ts` now reads from `process.env`.

Copy `.env.example` to `.env.local` (or `.env`) and fill in your Firebase values. Example file is included as `.env.example` in the repository root.

Example environment variables (place in `.env.local`):

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=
```

IMPORTANT: Do not commit real secrets to source control. Keep `.env.local` out of version control and rotate any keys if they were previously committed.

## Project structure (high level)

- `src/app/` — Next.js application routes and layout
	- `layout.tsx` — Root layout and site metadata (title, description)
	- `page.tsx` — Home page wiring that composes the sections
- `src/components/` — Reusable UI components and sections
	- `components/layout/` — Header, Footer, Page transitions
	- `components/sections/` — Hero, Services, About, Team, Testimonials, Contact, Tech Visualizer
	- `components/ui/` — Small UI primitives used across the site (buttons, badges, cards, etc.)
- `src/lib/` — Utility code and helpers (including `firebase.ts`)
- `docs/` — Design and blueprint notes (`blueprint.md` documents features and style)

Key files you might want to edit:

- `src/components/sections/team.tsx` — Team members list and social links (add/remove team members and social URLs here)
- `src/app/layout.tsx` — Site title and global head tags (fonts, metadata)
- `src/lib/firebase.ts` — Firebase initialization (replace with env-driven config)

## Tech stack

- Next.js (React) with TypeScript
- Tailwind CSS for styling
- Firebase (Firestore) for backend data
- `lucide-react` and `@tabler/icons-react` for icons
- `radix-ui` primitives and Tailwind utility components
- `framer-motion` for UI animations
- `genkit` for AI-assisted features (some AI flows live under `src/ai`)

## Features

The project includes the following built-in sections and features (see `docs/blueprint.md` for the original design brief):

- Service Showcase — interactive cards listing offered services and technologies
- Interactive Tech Visualizer — AI-assisted visualization of tech stacks (uses Genkit/AI flows)
- Testimonials carousel — rotating customer testimonials
- Contact form with file upload — validated contact form that stores submissions (requires Firebase)
- Team showcase — filterable team cards; supports multiple expertise tags and per-member social links (GitHub, LinkedIn, Twitter, Medium, Facebook, Instagram, Portfolio)

## Editing the Team and Social Links

Team members are defined in `src/components/sections/team.tsx`. Each entry has this shape:

```ts
{
	name: 'Full Name',
	role: 'Role',
	expertise: 'Frontend, Backend, Mobile',
	imageId: 'team-member-1',
	social: {
		github?: 'https://github.com/..',
		linkedin?: 'https://linkedin.com/..',
		twitter?: 'https://twitter.com/..',
		medium?: 'https://medium.com/@..',
		facebook?: 'https://facebook.com/..',
		instagram?: 'https://instagram.com/..',
		portfolio?: 'https://your-site.dev'
	}
}
```

The UI will only render social icons for links that are present. Expertise is comma-separated and is split into individual badges and used by the filter buttons.

## Accessibility & best practices

- Icon buttons include `aria-label` attributes for screen readers.
- External links open with `rel="noopener noreferrer"` for security.

## Development notes

- The project includes Genkit flows under `src/ai/` (see `genkit` scripts in `package.json`). If you plan to use the AI integrations, install and configure `genkit` as required by their docs and provision any API keys (do not commit them).
- To regenerate `package-lock.json` after changing `package.json` or to tidy dependencies, run:

```powershell
npm install
```

## Security note

There is a Firebase config present in `src/lib/firebase.ts`. If those values are real and sensitive, remove them from the repository and replace them with environment variables as shown above. Rotate API keys if they were ever committed publicly.

## Suggested next steps

- Replace placeholder team social links with real URLs.
- Move Firebase config into environment variables and update `firebase.ts` to read from `process.env`.
- Add CI (GitHub Actions) to run `npm run lint` and `npm run typecheck` on PRs.
- Add unit / integration tests and a `test` script.

## Contribution

Feel free to open issues or submit pull requests. For larger changes, open an issue first to discuss the plan.

## License

This repository does not include a license file. Add a `LICENSE` if you want to specify reuse terms.

---

If you want, I can also:
- Add a `.env.example` with the environment variable names (no values).
- Add a simple script to migrate `src/lib/firebase.ts` to use environment variables.
- Generate GitHub Action workflow templates for lint/typecheck.

Tell me which of the above you'd like me to do next and I will implement it.
