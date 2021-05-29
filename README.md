# web

> **Warning**: This repository is not ready for use and should be ignored for now.

## Introduction

> Describe the "why" of your GitHub project here.

Base template for all web frontends.

## Build Instructions

Build and run the frontend as a dev server:

```sh
npm install
npm run dev
```

### Directory Structure

This is the directory structure as a whole.

```txt
.
├── components    [ Vue frontend-only components.                     ]
├── data          [ Data storage/definitions.                         ]
├── dist          [ (Not SCM-ignored) production files.               ]
├── layouts       [ Vue frontend base layouts, styles, and scripts.   ]
├── pages         [ Routing definition and frontend app page content. ]
├── static        [ Served static files (as-is) for the frontend.     ]
├── store         [ Vue frontend store that manages state.            ]
├── types         [ Frontend TypeScript support files.                ]
└── utils         [ Vue frontend utilities.                           ]
```

## Deploy

This app should be deployed as a static app. It can be deployed to GitHub Pages, Netlify, or
whichever static web page hosting you choose.

Build the project for production to test it works:

```sh
npm run generate
run run start
```

After doing this, you can deploy from `dist/` directly.

## To-Do

- [ ] **Check the license!**
- [ ] Finish/edit this README file.
- [ ] Familiarise yourself with [Inkling Flow](https://github.com/teaminkling/flow).
- [ ] Change the details in `package.json` and `nuxt.config.ts` as required.
- [ ] Delete the files in `store/` if you don't need them.
- [ ] Add/edit any and all badges associated with this project.
