# 🛒 বাজার দর — BazarDor

### Bangladesh Daily Essentials Price Tracker 🇧🇩

**BazarDor** is a responsive web application built with Next.js and TypeScript to help users explore essential product prices in Bangladesh. It provides category-based product browsing, price-change indicators, sorting, market-wise price information, and user authentication through email/password, Google, and GitHub.

The project focuses on making everyday market-price information accessible through a clean, Bengali-friendly interface that works across desktop, tablet, and mobile devices.

## 🌐 Live Demo

**Live Website:** https://bazar-dor-as7-ph-zzjl.vercel.app/

**GitHub Repository:** https://github.com/nazifa-buildscodes/BazarDor-as7-ph

## ✨ Features

### 🏠 Homepage
- API-driven product and category data.
- Sections for products with increasing or decreasing prices.
- Product cards displaying prices, units, and price-change indicators.
- Animated price ticker for quick price information.
- Loading skeletons for a better loading experience.

### 🗂️ Category Navigation
- Browse products by rice, lentils, oil, vegetables, fish, meat, dairy, and spices.
- Dedicated category pages.
- Active category highlighting with a green background and white text.
- Horizontally scrollable category navigation.

### 📊 Price Tracking and Sorting
- Display current product prices.
- Visual indicators for price increases, decreases, and unchanged prices.
- Product sorting through a dedicated sorting control.
- Bengali-friendly price and unit formatting.
- Reusable utility functions for price-change labels and formatting.

### 🛍️ Product Details
- Individual product detail pages.
- Product information and market-wise price comparison.
- Authentication-aware access to protected functionality where configured.

### 🔐 Authentication
Powered by **Better Auth** with MongoDB integration.

- Email and password registration.
- Email and password sign-in.
- Google OAuth sign-in.
- GitHub OAuth sign-in.
- Session-aware navigation.
- Sign-out functionality.
- Protected access and authentication feedback.

### 👤 User Profile
- Profile page for authenticated users.
- Display user account information.
- Update the user's display name.
- Account dropdown menu.
- Sign-out controls.

### 📱 Responsive UI
- Desktop, tablet, and mobile-friendly layouts.
- Responsive product grids.
- Mobile navigation menu.
- Consistent green-themed UI.
- Interactive navigation states and hover effects.

### ⚡ User Experience
- Loading skeletons.
- Custom 404 page.
- Toast notifications.
- Reusable React components.
- Privacy Policy and Terms pages.

## 🧰 Technologies Used

| Technology | Purpose |
|---|---|
| Next.js App Router | Application framework and file-based routing |
| React | Component-based user interface |
| TypeScript | Type safety and maintainable code |
| Tailwind CSS | Responsive styling and UI design |
| Better Auth | Authentication and session management |
| MongoDB | Authentication-related database storage |
| MongoDB Atlas | Cloud database hosting |
| REST API | Product and category data |
| React Hot Toast | User feedback and toast notifications |
| Git | Version control |
| GitHub | Source code hosting |
| Vercel | Production deployment |

## 🏗️ Project Structure

```text
BazarDor/
├── app/
│   ├── api/
│   ├── category/
│   ├── privacy/
│   ├── product/
│   ├── profile/
│   ├── signin/
│   ├── signup/
│   ├── terms/
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   └── page.tsx
│
├── components/
│   ├── auth-shell.tsx
│   ├── category-client.tsx
│   ├── floating-assistant.tsx
│   ├── footer.tsx
│   ├── header.tsx
│   ├── home-content.tsx
│   ├── home-skeleton.tsx
│   ├── product-card.tsx
│   ├── product-details.tsx
│   ├── profile-update-form.tsx
│   ├── protected-toast.tsx
│   ├── section-title.tsx
│   ├── signin-form.tsx
│   ├── signup-form.tsx
│   ├── social-buttons.tsx
│   ├── sort-select.tsx
│   └── toast-provider.tsx
│
├── lib/
│   ├── api.ts
│   ├── auth.ts
│   ├── auth-client.ts
│   ├── fallback-data.ts
│   ├── mongodb.ts
│   └── utils.ts
│
├── public/
├── types/
│   └── index.ts
│
├── .env.example
├── .gitignore
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

*Note: The structure above follows the folders and filenames visible in the provided screenshots. The contents of `app/api/` are not expanded here because its nested filenames were not visible.*

## 📂 Important Files and Responsibilities

### `app/` — Pages and Routing

Uses the Next.js App Router to organize application pages.

- `page.tsx` — Homepage.
- `layout.tsx` — Root layout shared across pages.
- `loading.tsx` — Loading UI.
- `not-found.tsx` — Custom not-found page.
- `category/` — Category-based product pages.
- `product/` — Product-related routes.
- `profile/` — User profile page.
- `signin/` — Sign-in page.
- `signup/` — Registration page.
- `privacy/` — Privacy Policy.
- `terms/` — Terms and Conditions.
- `api/` — API route handlers, including the authentication handler.

### `components/` — Reusable UI

- `header.tsx` — Navbar, category navigation, account menu, mobile menu, and price ticker.
- `home-content.tsx` — Homepage product sections.
- `home-skeleton.tsx` — Homepage loading skeleton.
- `product-card.tsx` — Reusable product card.
- `product-details.tsx` — Product detail presentation.
- `category-client.tsx` — Category page interactions.
- `sort-select.tsx` — Sorting control.
- `signin-form.tsx` — Email/password sign-in form.
- `signup-form.tsx` — Registration form.
- `social-buttons.tsx` — Google and GitHub sign-in buttons.
- `profile-update-form.tsx` — Profile update form.
- `auth-shell.tsx` — Shared authentication page layout.
- `protected-toast.tsx` — Feedback for protected interactions.
- `toast-provider.tsx` — Toast notification provider.
- `section-title.tsx` — Reusable section headings.
- `footer.tsx` — Shared footer.
- `floating-assistant.tsx` — Floating assistant interface.

### `lib/` — Logic and Integrations

- `api.ts` — Product API requests and data handling.
- `auth.ts` — Server-side Better Auth configuration.
- `auth-client.ts` — Client-side authentication integration.
- `mongodb.ts` — MongoDB connection setup.
- `fallback-data.ts` — Fallback data for supported fallback scenarios.
- `utils.ts` — Shared utility functions for formatting and other reusable logic.

### `types/` — TypeScript Definitions

- `index.ts` — Shared application and product-related types.

## 🔌 API Integration

BazarDor retrieves product information from the Programming Hero BazarDor API.

**API Base URL**

```text
https://openapi.programming-hero.com/api/bazardor
```

API-related code is organized in `lib/api.ts`, keeping data-fetching logic separate from UI components.

The project also contains `lib/fallback-data.ts` for fallback data handling.

## 🔐 How Authentication Works

BazarDor uses Better Auth for authentication and MongoDB for database integration.

### Email and Password
1. A user registers through the signup page.
2. Better Auth handles the authentication process and account-related operations.
3. The user signs in through the signin page.
4. The client reads the current session to update the interface.
5. The user can sign out through the account menu.

### Google OAuth
1. The user selects Google sign-in.
2. Better Auth redirects the user to Google.
3. Google redirects back to the configured callback URL after authorization.
4. Better Auth processes the response and establishes the session.

### GitHub OAuth
1. The user selects GitHub sign-in.
2. Better Auth redirects the user to GitHub.
3. GitHub redirects back to the configured callback URL after authorization.
4. Better Auth processes the response and establishes the session.

### Session-Aware UI
The header checks the user's session to decide whether to display sign-in/sign-up links or the authenticated user's account menu. Account-related functionality is available according to the application's authentication and route configuration.

## 🧠 Technical Challenges and Solutions

### 1. API Integration
**Challenge:** Organizing product data from an external API so multiple pages can use it consistently.

**Approach:** Keep API-related logic in `lib/api.ts` and share reusable product types and UI components across pages.

### 2. OAuth Configuration
**Challenge:** Social login requires the correct client credentials, callback URLs, and environment-specific settings.

**Approach:** Configure Google and GitHub OAuth separately, use Better Auth for the authentication flow, and keep local and production settings aligned with their respective URLs.

### 3. MongoDB Integration
**Challenge:** Connecting authentication to a cloud database without exposing database credentials in source code.

**Approach:** Keep connection settings in environment variables and use Better Auth's MongoDB adapter for authentication-related database operations.

The MongoDB adapter does not use the SQL-style migration workflow associated with relational database setups.

### 4. Dynamic Category Navigation
**Challenge:** Showing users which product category they are currently browsing.

**Approach:** Use the current route to determine the active category and apply a green background with white text to the matching navigation link.

### 5. Sorting and Consistent Formatting
**Challenge:** Providing sorting controls and consistent price presentation throughout the application.

**Approach:** Use a dedicated sorting component and shared utility functions for formatting prices, units, and price-change labels.

### 6. Responsive UI
**Challenge:** Making navigation and product layouts work across different screen sizes.

**Approach:** Use Tailwind CSS responsive utilities, flexible grids, a mobile menu, and horizontally scrollable category navigation.

### 7. Loading and Error States
**Challenge:** Maintaining a usable interface during loading and when a route cannot be found.

**Approach:** Provide loading skeletons and a custom 404 page.

## ⚙️ Run Locally

### Prerequisites
- Node.js
- npm
- Git
- MongoDB Atlas or a compatible MongoDB database
- Google OAuth credentials for Google sign-in
- GitHub OAuth credentials for GitHub sign-in

### 1. Clone the Repository

```bash
git clone https://github.com/nazifa-buildscodes/BazarDor-as7-ph.git
cd BazarDor-as7-ph
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the project root. Use `.env.example` as a reference.

Example configuration:

```env
MONGODB_URI=your_mongodb_connection_string
MONGODB_DB=bazardoor

BETTER_AUTH_SECRET=your_secure_random_secret
BETTER_AUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

GITHUB_CLIENT_ID=your_local_github_client_id
GITHUB_CLIENT_SECRET=your_local_github_client_secret

NEXT_PUBLIC_BAZAR_API=https://openapi.programming-hero.com/api/bazardor
```

Use the exact variable names expected by your current source code. Never commit `.env.local` or real credentials to GitHub.

### 4. Start the Development Server

```bash
npm run dev
```

Open the local application:

```text
http://localhost:3000
```

## 🍃 MongoDB Atlas Setup

1. Create a MongoDB Atlas cluster.
2. Create a database user and password.
3. Configure Network Access for your development environment.
4. Copy the MongoDB connection string.
5. Set `MONGODB_URI` in `.env.local`.
6. Set `MONGODB_DB` to your chosen database name.
7. Restart the development server after changing environment variables.

## 🔑 OAuth Callback URLs

### Local Development

**Google**
```text
http://localhost:3000/api/auth/callback/google
```

**GitHub**
```text
http://localhost:3000/api/auth/callback/github
```

### Production

Configure the Google and GitHub OAuth applications with the matching production callback URLs.

For BazarDor, the production origin is:

```text
https://bazar-dor-as7-ph-zzjl.vercel.app
```

Local and production environments may use separate OAuth applications and credentials. Keep their settings separate, and do not publish client secrets.

## 🚀 Deployment

BazarDor is deployed on Vercel.

**Production Website:** https://bazar-dor-as7-ph-zzjl.vercel.app/

Deployment checklist:

1. Connect the GitHub repository to Vercel.
2. Configure the required environment variables.
3. Set `BETTER_AUTH_URL` to the production origin.
4. Configure production OAuth callback URLs.
5. Ensure the database accepts connections from the deployment environment.
6. Deploy and test product data, category navigation, authentication, and profile functionality.

## 🔒 Security Notes

- Never commit `.env.local` or real credentials.
- Use a strong, unique `BETTER_AUTH_SECRET`.
- Keep database credentials private.
- Configure OAuth callback URLs carefully.
- Keep local and production credentials separate.
- Rotate any credentials that have been exposed.

## 👩‍💻 Author

**Nazifa Nowsin**

- GitHub Profile: https://github.com/nazifa-buildscodes
- Project Repository: https://github.com/nazifa-buildscodes/BazarDor-as7-ph
- Live Website: https://bazar-dor-as7-ph-zzjl.vercel.app/

---

### 🇧🇩 BazarDor — বাজারের দর জানুন, সচেতনভাবে বাজার করুন।

Built with Next.js, TypeScript, Tailwind CSS, Better Auth, and MongoDB.
