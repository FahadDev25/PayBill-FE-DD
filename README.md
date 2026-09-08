# PayBill – Frontend

PayBill is a bill-payment web application. This repository contains the React single-page app that lets a user register a utility bill (e.g. LESCO, MEPCO), track its history, view payment plans, and pay it — talking to a separate PayBill backend API.

Built with [Create React App](https://github.com/facebook/create-react-app).

## Tech Stack

- **React 18** with **React Router v6** for routing
- **Axios** for HTTP requests to the backend API
- **React Toastify** for toast notifications
- Bootstrap-based admin/dashboard theme (bundled under `src/App/assets` and `src/assets`), plus jQuery-driven plugins (DataTables, Select2, SweetAlert2, ApexCharts, etc.) for the dashboard UI

## Project Structure

```
src/
├── App.js                 # Route definitions and top-level layout switch
├── axios.js                # Axios instance + API base URL + auth header
├── base_paths.js           # Base URL used for image/asset links
├── routes/
│   ├── index.js             # Public and auth-protected route lists
│   └── AuthRoute.js         # ProtectedRoute / PublicRoute guards (token-based)
├── container/
│   ├── vertical-layout/     # Authenticated app shell (Header, Sidebar, Footer)
│   └── noAuth-layout/       # Public site shell (Header, Nav, Footer)
├── pages/
│   ├── noauth-layout/       # Home, Login
│   └── vertical-layout/     # Dashboard, bill-detail, bill-history, payment, plan
├── common/                  # Shared layout image/CSS import helpers
├── helpers/                 # Shared utility functions (e.g. toast helpers)
├── Components/               # Reusable UI components
└── assets/, App/assets/      # Images, fonts, CSS, and third-party JS plugins
```

## Routing & Auth

Routes are split into two groups (`src/routes/index.js`):

- **Public routes** (`/`, `/login`) — wrapped in `PublicRoute`, which redirects to `/dashboard` if a token is already present.
- **Protected routes** (`/dashboard`, `/bill-details`, `/bill-details/add`, `/bill-history`, `/payments`, `/plans`) — wrapped in `ProtectedRoute`, which redirects to `/login` if no token is present.

Authentication state is a JWT stored in `localStorage` under the `token` key. `src/axios.js` attaches it to every request as a `Bearer` token.

## Getting Started

### Prerequisites

- Node.js and npm

### Installation

```bash
npm install
```

### Configure the API endpoint

The backend API base URL and asset host are currently hardcoded in:

- `src/axios.js` — `axios.defaults.baseURL`
- `src/base_paths.js` — `image` base path

Update these to point at your backend instance before running the app.

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in development mode at [http://localhost:3000](http://localhost:3000). The page reloads on changes.

#### `npm test`

Launches the test runner in interactive watch mode.

#### `npm run build`

Builds the app for production to the `build` folder, minified and ready to deploy.

#### `npm run eject`

Ejects the Create React App build configuration. This is a one-way operation.

## Key Features

- **Home / Login** — public marketing page and authentication
- **Dashboard** — landing page after login
- **Bill Details** — add and view registered utility bills (`/bill-details`, `/bill-details/add`)
- **Bill History** — view past bill records (`/bill-history`)
- **Payments** — make/view payments (`/payments`)
- **Plans** — view available payment plans (`/plans`)

## Learn More

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)
