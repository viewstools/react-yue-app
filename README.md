# react-yue-app

[react-yue](https://github.com/oyyd/react-yue) is a cross-platform React
renderer to make native apps through [yue](https://github.com/yue/yue).

This app setup showcases live reload in development through rollup + nodemon
and building a binary of your app.

## Setup

Install the dependencies (use either `yarn` or `npm`):

```
npm install
```

```
npm run setup
```

## Develop

Your code starts at `src/index.js` and it's compiled by `rollup.config.js` into
`app.js`.

```
npm run start
```

Your app should open on a new window and every time you change something in `src` it
will be reloaded.

## Build

```
npm run build
```

Your app's binary will be in the `build` folder.
It will build for the platform you're on but [you can configure it to build for
other platforms too](https://github.com/yue/yackage#examples)

License MIT.
