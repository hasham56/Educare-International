# Original design — backup (not routed)

This is the site as it looked before the redesign. Nothing imports it, so Vite
does not bundle it and it is not reachable at any URL. It is kept here so the
old look can be brought back or referred to.

It is not frozen in the past: it uses the same shared contact module as the live
site (`src/shared/contact.js` and `src/shared/CallLink.jsx`), so the phone
number, the WhatsApp number and the pre-filled messages stay correct here too.

## Bringing it back

In `src/main.jsx`, import this `App` instead of the redesign:

```js
import App from './_original-design/App.jsx'
```

To serve both at once, restore the path check that used to live in `main.jsx`:

```js
const path = window.location.pathname.replace(/\/+$/, '')
const isOriginal = path === '/original' || path.startsWith('/original/')
// ...then render <OriginalApp /> or <NewDesignApp /> accordingly
```

Also drop the `/new-design` redirect from `main.jsx` and the matching 301 in
`public/_redirects` if the old two-address setup is wanted back.
