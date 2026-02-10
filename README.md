# Portfolio Website

A modern, responsive developer portfolio built with Next.js, Tailwind CSS, and Framer Motion. It highlights projects, skills, certificates, and contact options with a polished UI, smooth animations, and dark/light theme support.

## Features

- Fully responsive layout (mobile → desktop)
- Dark/light theme toggle
- Animated hero with dynamic typing effect
- Projects showcase with category filter
- Certificates & awards with modal details
- Experience timeline
- Blog section
- Contact form with API route (email delivery)
- SEO-ready metadata, sitemap, and robots

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React, React Icons
- **Email:** Nodemailer (server route)

## Getting Started

1. **Install dependencies**

```bash
cd portfolio-site
npm install
```

2. **Run the dev server**

```bash
npm run dev
```

3. Open http://localhost:3000

## Environment Variables

Create a `.env.local` file in `portfolio-site/` and set:

```
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
CONTACT_TO=
CONTACT_FROM=
```

## Project Structure

```
portfolio-site/
	public/
		images/
	src/
		app/
		components/
		hooks/
		lib/
		types/
```

## Customization

- **Profile data:** update `src/lib/constants.ts`
- **Projects:** update `src/lib/data/projects.ts`
- **Certificates:** update `src/lib/data/certificates.ts`
- **Skills:** update `src/lib/data/skills.ts`
- **Experience:** update `src/lib/data/experiences.ts`

## Deployment

Deploy on Vercel or any Node.js hosting provider that supports Next.js App Router.

## License

MIT
