# paced.me

My personal (static) website for recruiters and curious people.

## Build

Run the dev server with:

```shell
npm install
npm run dev
```

## Deploy

Run:

```shell
NODE_ENV=production npm run build
```

On build, we deploy the site from `dist/client` directly.
