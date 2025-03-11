# paced.me

My personal (static) website for recruiters and curious people.

## Build

Run the dev server with:

```shell
pnpm install
pnpm run dev
```

## Deploy

Run:

```shell
NODE_ENV=production pnpm run build
```

On build, we deploy the site from `dist/client` directly.
