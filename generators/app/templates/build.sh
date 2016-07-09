#!/usr/bin/env bash
npm run lint
rc=$?; if [[ $rc != 0 ]]; then exit $rc; fi
npm run test
rc=$?; if [[ $rc != 0 ]]; then exit $rc; fi
NODE_ENV=production webpack --progress --color -p --config ./webpack.prod.config.js
rc=$?; if [[ $rc != 0 ]]; then exit $rc; fi
