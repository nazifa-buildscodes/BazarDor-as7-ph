# বাজার দর — BazarDor

বাংলাদেশি নিত্যপ্রয়োজনীয় পণ্যের দৈনিক দাম, বাজারভিত্তিক তুলনা এবং দাম বাড়া-কমার তথ্য এক নজরে দেখার জন্য একটি responsive Next.js application।

## Technologies
- Next.js App Router
- TypeScript
- Tailwind CSS
- Better Auth
- MongoDB
- React Hot Toast
- REST API

## Key Features
1. API-driven product/category data
2. Price rise/fall sections and animated ticker
3. Responsive category filtering and Bengali-number sorting
4. Protected product details with market-wise price table
5. Email/password + Google/GitHub authentication with Better Auth
6. Profile and name update
7. Loading skeletons, friendly 404 and toast feedback
8. Mobile, tablet and desktop responsive UI

## Run locally
```bash
npm install
cp .env.example .env.local
npm run dev
```

Set `MONGODB_URI`, `MONGODB_DB`, `BETTER_AUTH_SECRET` and the social provider credentials in `.env.local`.

### MongoDB note
This project uses the official Better Auth MongoDB adapter. MongoDB does **not** require the SQL-style Better Auth migration command; the adapter manages its collections at runtime.

## API
`https://api.api-store.workers.dev/api/bazardor`

Alternative: `https://api.abcz.workers.dev/api/bazardor`

## Deployment
Deploy to Vercel/Netlify/Cloudflare Pages. Add the same environment variables in the deployment dashboard and set `BETTER_AUTH_URL` to the deployed origin.

## Suggested meaningful commits
- `feat: initialize BazarDor Next.js app`
- `feat: add API product and category data`
- `feat: build responsive navbar and price ticker`
- `feat: build home product sections`
- `feat: add protected product details`
- `feat: add category sorting and loading states`
- `feat: add Better Auth with MongoDB`
- `feat: add profile update and polish responsive UI`

## MongoDB Atlas setup
1. Create a free MongoDB Atlas cluster.
2. Create a database user and password.
3. Add your current IP in Network Access (for local development).
4. Copy the driver connection string into `MONGODB_URI`.
5. Use a database name such as `bazardoor` in `MONGODB_DB`.

Example:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority
MONGODB_DB=bazardoor
```

## Social login setup
If you want the Google/GitHub buttons to actually authenticate, add OAuth credentials.

Local callback URLs:
- Google: `http://localhost:3000/api/auth/callback/google`
- GitHub: `http://localhost:3000/api/auth/callback/github`

For deployment, replace `http://localhost:3000` with your deployed domain and set `BETTER_AUTH_URL` to that same domain.
