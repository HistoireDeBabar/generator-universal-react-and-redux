
__N.B. This project is no longer maintained.  If you're looking to get started with react and/or redux and would like to get up and running quickly, I'd highly recommend [create-react-app](https://github.com/facebookincubator/create-react-app), it's awesome!__


# generator-universal-react-and-redux [![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-image]][daviddm-url]
> a yeoman generator for universal/isomorphic applications using react, redux, webpack and express.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-universal-react-and-redux using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-universal-react-and-redux
```

Then generate your new project:

```bash
yo universal-react-and-redux
```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## Universal Web Applications & Current Setup

This generator was put together to ease the pain of starting a 'Universal Web Application',
also referred to as an 'Isomorphic Web Application'.  The goal behind Universal applications
are to:
 * reduce the amount of duplicated client and server side code
 * reduce initial load times of Single Page Applications
 * increase SEO for Single Page Applications
 * increase overall UX that Single Page Applications can be prone to (such as stuttered loading & reducing loading spinners)

If you're familiar with writing Single Page Applications, you'll no doubt stumbled accross one or all of the issues outlined
above.  To overcome these issues, this generator builds an application shell using React, Redux, Webpack and Express. The application
will be rendered on the server, and initial state will be transfered to the client.  Furthermore, the through using webpack and react-router
we can load our scripts and static assets dynamically as we navigate through the application opposed to upfront.

This generator has been put together with the aid and influence of several other blogs and documentation sites, for more information
on the state of Univeral Web Applications see the resources below.

## Useage

After the Yeoman Generator has completed, and `npm install` has been successful you can launch your new Universal App with:
```
   npm run dev
```
### Development Mode

Running in dev mode uses webpacks dev server, this does not produce an output file/bundle and offers hot reloading.
Once the server is running head to http://localhost.com:8080.  If you happen to navigate to localhost:3000 you will see your web page
however as webpack stores the bundles in memory there will be an error in the console noting that your scripts can not be found.  Simply
use port 8080 in development mode to get a functioning development environment.  For more information see the webpack documentation listed
in the Resources.

### Testing & Linting

They are several testing and linting commands baked into the project, they are:
```
  npm test
  npm run lint
  npm run test:watch
  npm run cover
```
Firstly, `npm test` runs the tests in the test directory once.  `npm run lint` lints the project.  `npm run test:watch` runs the test runner continiously, watching
files for changes and reruns on a change event (good for TDD). Finally, `npm run cover` gives a breakdown as both a terminal output and within the coverage folder of all
the test paths being covered and not covered in the project.

### Building

To build the application for production you can run:
```
  npm run build
```
This runs webpack with configurations to uglify and optimise the javascript.  It also outputs the files and chunks into the dist/ folder.
You can then call:
```
  npm start
```

## Resources

- http://redux.js.org/
- https://egghead.io/lessons/javascript-redux-the-single-immutable-state-tree
- https://github.com/reactjs/react-router/blob/master/docs/guides/ServerRendering.md
- https://github.com/DavidWells/isomorphic-react-example
- http://blog.scottlogic.com/2016/02/05/a-lazy-isomorphic-react-experiment.html
- https://medium.com/front-end-developers/handcrafting-an-isomorphic-redux-application-with-love-40ada4468af4#.6qon662vr
- https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.1gtchtcdg
- https://github.com/petehunt/webpack-howto
- http://webpack.github.io/docs/
- http://survivejs.com/webpack/developing-with-webpack/
- https://medium.com/@dan_abramov

## License

ISC © [HistoireDeBabar](http://histoiredebabar.github.io/)


[npm-image]: https://badge.fury.io/js/generator-universal-react-and-redux.svg
[npm-url]: https://npmjs.org/package/generator-universal-react-and-redux
[daviddm-image]: https://david-dm.org/HistoireDeBabar/generator-universal-react-and-redux.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/HistoireDeBabar/generator-universal-react-and-redux
