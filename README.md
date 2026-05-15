# CP Team Procurement Web System (MVP)

## Stack
Next.js 14 + TypeScript + Tailwind + Prisma + SQLite.

## MVP scope
- Local SQLite
- Login/RBAC data model + seed accounts
- Item/Vendor/PR/PO/Request/Approval/Audit schema
- Dashboard + module pages
- Excel workbook mapping doc: `docs/excel-workbook-spec.md`
- Ready schema for Excel import preview and PO PDF output extension

## Setup
1. `cp .env.example .env`
2. `npm install`
3. `npx prisma generate`
4. `npx prisma migrate dev --name init`
5. `npm run prisma:seed`
6. `npm run dev`

## Test accounts
- admin@example.com / password123
- cpteam@example.com / password123
- member@example.com / password123

## Excel import (MVP baseline)
- Upload page at `/import` placeholder.
- Required sheets: PR-HK, Summary-HK, Item Code, 工作表1.
- Duplicate/missing-key rules are documented in `docs/excel-workbook-spec.md`.

## PO PDF
- PO module at `/pos` placeholder.
- A4 print layout should include buyer/vendor/header/item table/totals/tax/remark/signature/CoC note.

## PostgreSQL migration later
1. Change datasource provider to `postgresql`.
2. Update `DATABASE_URL`.
3. Run `prisma migrate deploy` on target DB.
