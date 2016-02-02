## React Dashboard - Flatlogic 2016 Dashboard App

> **React Dashboard** is an opinionated
> boilerplate for web development built on top of Facebook's
> [React](https://facebook.github.io/react/) library,
> [Node.js](https://nodejs.org/) / [Express](http://expressjs.com/) server
> and [Flux](http://facebook.github.io/flux/) architecture. Containing
> modern web development tools such as [Webpack](http://webpack.github.io/),
> [Babel](http://babeljs.io/) and [BrowserSync](http://www.browsersync.io/).
> Helping you to stay productive following the best practices. A solid starting
> point for both professionals and newcomers to the industry.

### Getting Started

  * Follow the [getting started guide](./docs/getting-started.md) to download and run the project
  * Check the [code recipes](./docs/recipes) used in this boilerplate, or share yours

### Directory Layout

```
.
├── /build/                     # The folder for compiled output
├── /docs/                      # Documentation files for the project
├── /node_modules/              # 3rd-party libraries and utilities
├── /src/                       # The source code of the application
│   ├── /actions/               # Action creators that allow to trigger a dispatch to stores
│   ├── /api/                   # REST API / Relay endpoints
│   ├── /components/            # React components
│   ├── /constants/             # Constants (action types etc.)
│   ├── /content/               # Static content (plain HTML or Markdown, Jade, you name it)
│   ├── /core/                  # Core framework and utility functions
│   ├── /decorators/            # Higher-order React components
│   ├── /public/                # Static files which are copied into the /build/public folder
│   ├── /stores/                # Stores contain the application state and logic
│   ├── /client.js              # Client-side startup script
│   ├── /config.js              # Global application settings
│   ├── /routes.js              # Universal (isomorphic) application routes
│   └── /server.js              # Server-side startup script
├── /tools/                     # Build automation scripts and utilities
│   ├── /lib/                   # Library for utility snippets
│   ├── /build.js               # Builds the project from source to output (build) folder
│   ├── /bundle.js              # Bundles the web resources into package(s) through Webpack
│   ├── /clean.js               # Cleans up the output (build) folder
│   ├── /copy.js                # Copies static files to output (build) folder
│   ├── /deploy.js              # Deploys your web application
│   ├── /run.js                 # Helper function for running build automation tasks
│   ├── /runServer.js           # Launches (or restarts) Node.js server
│   ├── /start.js               # Launches the development web server with "live reload"
│   └── /webpack.config.js      # Configurations for client-side and server-side bundles
│── package.json                # The list of 3rd party libraries and utilities
└── preprocessor.js             # ES6 transpiler settings for Jest
```


### Learn More

  * [Getting Started with React.js](http://facebook.github.io/react/)
  * [Getting Started with GraphQL and Relay](https://quip.com/oLxzA1gTsJsE)
  * [React.js Questions on StackOverflow](http://stackoverflow.com/questions/tagged/reactjs)
  * [React.js Discussion Board](https://discuss.reactjs.org/)
  * [Flux Architecture for Building User Interfaces](http://facebook.github.io/flux/)
  * [Jest - Painless Unit Testing](http://facebook.github.io/jest/)
  * [Flow - A static type checker for JavaScript](http://flowtype.org/)
  * [The Future of React](https://github.com/reactjs/react-future)
  * [Learn ES6](https://babeljs.io/docs/learn-es6/), [ES6 Features](https://github.com/lukehoban/es6features#readme)

### Support

  * [#react-starter-kit](https://gitter.im/kriasoft/react-starter-kit) on Gitter — Feedback, feature requests, Q&A
  * [@koistya](https://www.codementor.io/koistya) on Codementor — Mentorship, pair coding, code reviews
  * support@kriasoft.com — Customization requests, help with GraphQL/Relay, database design etc.

---
Made with ♥ by Flatlogic ([@flatlogic](https://twitter.com/flatlogicinc))
