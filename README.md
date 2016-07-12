React Workshop
==

These are materials for React Workshop after which you will be able to create and maintain scaleable [React](https://facebook.github.io/react/) applications.

Slides for presentations can be found here: https://slides.com/mistadikay

## File structure

```
.
├── /build                    # production build
│
├── /conf                     # configuration files
│   ├── /karma.js             # Karma test runner config
│   └── /webpack              # Webpack common config
│   	├── /index.js         # -- common
│   	├── /build.js         # -- for static build (`npm start build`)
│   	├── /dev.js           # -- for dev mode (`npm start dev`)
│   	└── /test.js          # -- for running tests
│
├── /html                     # Static assets you will use as a basis for your React application
│
├── /server                   # local mock data to emulate the API server
│
├── /src
│   ├── /assets               # static assets (*.html for webpack)
│   ├── /components           # app specific components
│   └── /index.js             # application entry point
│
├── /tasks                    # tasks (see full list below)
│
└── /test
	├── /src                  # actual tests, mirroring src directory structure
	└── /index.js             # entry point for Karma test runner
```

## Tasks

### dev

Run [Webpack](https://webpack.github.io/) dev server with [Hot Module Replacement](https://github.com/gaearon/react-transform-hmr) on localhost.

```shell
npm start dev
```

### build

Build production app.

```shell
npm start build
```

### lint

[ESLint](http://eslint.org/) + [stylelint](http://stylelint.io/).

```shell
npm start lint
```

### comb

Format you styles with [CSScomb](http://www.csscomb.com/)

```shell
npm start comb
```

### tdd

Run [Karma](https://karma-runner.github.io) server with your tests, autoupdated on every change. Tests are powered by [Mocha](https://mochajs.org/), [Chai](http://chaijs.com/), [Enzyme](https://github.com/airbnb/enzyme) and a bunch of plugins.

```shell
npm start tdd
```

### test

Linters + tests.

```shell
npm test
```

## F.A.Q.

### What do I need to know?

Solid Javascript knowledge is preferable. However, if you're good enough at least with jQuery, we'll try to work with that.

You don't have to know anything about React itself, but you may want to visit [official website](https://facebook.github.io/react/) to get yourself a bit familiar with the topic.

### What do I learn?

There are three parts, and each one them is a theory followed by a practical task:

#### 1. React: up and running

**Theory:** *Time To React. Why React is a game changer in UI-development*

I will tell you why React is such a huge step forward and then give you the basic idea of how it works.

**Practice:** *Create basic React application*

We'll use static assets from `html` folder to turn them into a small React-application. 


#### 2. Style isolation and testing

**Theory:** *React ♥️ BEM. Using BEM in React ecosystem*

I'll give you the overview of style isolating in React applications including css-modules, inline-styles and BEM. Then I'll tell you why we chose BEM and how we work with it in React.

**Practice:** *Refactor styles and write some tests*

We'll refactor styles from the application we built in the first part with BEM and then write a couple of tests for our React components.

#### 3. Data management

**Theory:** *Go With The Flow. An Introduction to data management in React applications*

We will discuss how you can manage the data in your React applications depending on your needs, the size of the app, etc.

**Practice:** *Use Redux for application state*

We'll add Redux into our application, try some Redux middleware, divide some components into container and presentational and wrap it up with some performance optimization techniques.

### What about GraphQL, Relay, server-side rendering?

The purpose of this workshop is to give you the basics and make you comfortable in the growing React ecosystem. You can then jump to the hardcore stuff yourself if you want.

### What about tooling (Babel, Webpack, Karma, etc.)?

We will not concentrate on tooling much, because it will make this workshop too complicated. Everything would be already preconfigured, so you can jump straight to the coding and not worry about anything else.

### Should I go and rewrite everything with React after this workshop?

Of course not. If something works fine and there is no business value in rewriting/refactoring it, you don't have to.

You might want to consider using React for the new projects or for existing ones if you're sure there is a business value in it. What I hope this workshop will give you, apart from the technical knowledge, is understanding when and why using React is a good idea.

Though, to be fare, chosing React is usually *[a Business Decision, Not a Technology Choice](https://blog.formidable.com/using-react-is-a-business-decision-not-a-technology-choice-63c4641c5f7#.hen0dop4v)*.
