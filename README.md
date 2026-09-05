# She Chats Tech

Personal site and holding page for the founder of She Chats Tech, a community for women entering and moving through the tech industry.

React SPA built with Vite, deployed on Netlify. Built by [Studio Mesh](https://studiomesh.co).

---

## Stack

| | |
|---|---|
| Build | Vite 7 |
| Framework | React 18 |
| Routing | React Router 6 (`BrowserRouter`) |
| State | Redux Toolkit |
| Styling | Per-component CSS, plus styled-components |
| Animation | GSAP, Framer Motion |
| Media | Swiper, react-responsive-carousel, Three.js |
| Validation | Joi |

---

## Running locally

```bash
npm install
npm run dev
```

Vite serves on `localhost:5173`.

| Command | Does |
|---|---|
| `npm run dev` | Dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the built output locally |
| `npm run lint` | ESLint, fails on any warning |

No environment variables. No backend.

---

## Structure

```
src/
├── main.jsx              Entry point, mounts Router + Redux Provider
├── App.jsx               Routes and persistent chrome
├── pages/                Landing, About, Contact
├── components/           One folder per component, each with index.jsx + styles.css
├── redux/appSlice.js     Single slice
├── store/                Store config and action type constants
├── validation/           Joi schemas for the contact form
├── css/                  Global styles
├── data/                 Static content (e.g. carousel slides)
└── assets/               Images, cursors, fonts
```

`Header`, `Menu`, `Footer`, `Cursor` and `ScrollToTop` sit outside the `<Routes>` block in `App.jsx`, so they persist across navigation.

---

## Deployment

Netlify, building from `main`.

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Publish directory | `dist` |

`public/_redirects` holds the SPA rewrite:

```
/*    /index.html   200
```

Without it, `/about` and `/contact` 404 on direct load or refresh, since Netlify looks for a file at that path rather than handing the request to the router.
