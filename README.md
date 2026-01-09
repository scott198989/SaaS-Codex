# Havoc Data Forge

Havoc Data Forge is a SaaS for ingesting messy documents and producing audited, structured JSONL exports for analytics, search indexing, and compliance workflows.

## What it does
- Multi-format ingestion: PDF, Office, images, HTML, code, notebooks, and archives.
- Content-aware cleaning: boilerplate removal, deduplication, paragraph reconstruction.
- Structured JSONL exports: text and Q/A formats with validation reports.
- Audit trail: run logs, checksums, and provenance for every export.
- Workspace operations: authentication, email verification, billing, and usage tracking.

## Status
Core UI, authentication flows, and database schema are in place. The ingestion pipeline, billing automation, and export execution are in progress.

## Stack
- Next.js App Router (TypeScript)
- Prisma + PostgreSQL
- Stripe (billing)
- Resend (email)

## Local setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file:
   ```bash
   copy .env.example .env
   ```
3. Update `.env` with your credentials.
4. Push the database schema:
   ```bash
   npm run db:push
   ```
5. Start the dev server:
   ```bash
   npm run dev
   ```

## Environment variables
See `.env.example` for the full list. Required for local auth flows:
- `DATABASE_URL`
- `APP_URL`

Email delivery (optional; logs to console if unset):
- `RESEND_API_KEY`
- `EMAIL_FROM`

Billing (optional until billing routes are implemented):
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `STRIPE_PRICE_STARTER`
- `STRIPE_PRICE_GROWTH`
- `STRIPE_PRICE_SCALE`

## Deployment (Vercel)
1. Create a new Vercel project and connect this repository.
2. Set all required environment variables in Vercel.
3. Ensure the production database is reachable.
4. Run `npm run db:push` against the production database before first deploy.

## Validation note
No market or pricing claims are made here. Run willingness-to-pay and demand validation experiments before publishing pricing.
