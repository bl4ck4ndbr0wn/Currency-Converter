# Currency-Converter

a front-end application that takes advantage of the functionalities Freecurrencyconverterapi provides. The application is able convert one currency to another while offline or online.

(Freecurrencyconverterapi)[] is an API that converts one currency to another and returns result in json format.

### devDependencies are the npm packages that are needed during development:

- webpack leads to webpack being installed locally.
- webpack-dev-server adds a hot-reloading development web server to webpack.
- copy-webpack-plugin is a webpack plugin that copies files to the build directory.
- babel-loader enables webpack to transpile JavaScript via Babel. This package internally imports a few core Babel packages (babel-core etc.).

- babel-preset-es2015 is a Babel preset for compiling ES6 to plain ES5.

### scripts specifies several ways in which you can run webpack:

- Build once:
  `npm run build`

* Watch files continuously, rebuild incrementally whenever one of them changes:

`npm run watch`

- Hot reloading via the webpack development server:
  `npm start` (a shortcut for npm run start)
  Go to `http://localhost:8080/`. The page reloads automatically when there are changes.
