React Workshop
==

These are materials for React Workshop after which you will be able to create and maintain scaleable [React](https://facebook.github.io/react/) applications.

## File structure

```
.
├── /build                    # production build
│
├── /conf                     # configuration files
│   ├── /karma.js             # Karma test runner config
│   └── /webpack	  	      # Webpack common config
│   	├── /index.js     	  # -- common
│   	├── /build.js     	  # -- for static build (`npm start build`)
│   	├── /dev.js       	  # -- for dev mode (`npm start dev`)
│   	└── /test.js     	  # -- for running tests
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

1. React basics
	* why React is a game changer in UI-development
    * render and jsx
    * components
    * lifecycle methods
	* controlled/uncontrolled components
	* propTypes
	* context
	* dynamic children
	* basic testing
2. Styles isolation
	* inline styles
    * css-modules
    * BEM
3. Data management
	* root component's state
	* container components
	* Flux
	* Redux

### What about immutability, GraphQL, Relay, server-side rendering?

The purpose of this workshop is to give you the basics and make you comfortable in the growing React ecosystem. You can then jump to the hardcore stuff yourself if you want.

### What about tooling (Babel, Webpack, Karma, etc.)?

We will not concentrate on tooling much, because it will make this workshop too complicated. All tooling for this workshop is already preconfigured, so you can jump straight to the coding and not worry about anything else.

### Should I go and rewrite everything with React after this workshop?

Of course not. If something works fine and there is no business value in rewriting/refactoring it, you don't have to.

You might want to consider using React for the new projects or for existing ones if you're sure there is a business value in it. What I hope this workshop will give you, apart from the technical knowledge, is understanding when and why using React is a good idea.

Though, to be fare, chosing React is usually *[a Business Decision, Not a Technology Choice](https://blog.formidable.com/using-react-is-a-business-decision-not-a-technology-choice-63c4641c5f7#.hen0dop4v)*.
