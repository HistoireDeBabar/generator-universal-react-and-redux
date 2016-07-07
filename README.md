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
